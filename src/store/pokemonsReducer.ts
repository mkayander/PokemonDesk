import { Dispatch, Reducer } from "redux";
import { ApiData, emptyApiData } from "../hooks/useApiData";
import { PokemonTypes } from "../data/models/response/PokemonsResponse";
import { StoreState } from "./index";
import { fetchPokemons, PokemonsApiResult, RequestArguments } from "../api/api";
import request from "../api/request";

export type PokemonsState = {
    pokemons: ApiData<PokemonsApiResult>;
    types: ApiData<PokemonTypes>;
};

const initialState: PokemonsState = {
    pokemons: emptyApiData,
    types: emptyApiData,
};

export enum PokemonsActionTypes {
    FETCH,
    FETCH_RESOLVE,
    FETCH_REJECT,
}

export type StateKey = keyof PokemonsState;
export type StateFieldType<K extends StateKey> = PokemonsState[K]["data"];
type FetchAction<K extends StateKey> = {
    type: PokemonsActionTypes.FETCH | PokemonsActionTypes.FETCH_RESOLVE | PokemonsActionTypes.FETCH_REJECT;
    field: K;
    payload?: StateFieldType<K>;
};

type PokemonsReducerActions = FetchAction<"types"> | FetchAction<"pokemons">;

const pokemonsReducer: Reducer<PokemonsState, PokemonsReducerActions> = (state = initialState, action) => {
    switch (action.type) {
        case PokemonsActionTypes.FETCH:
            return {
                ...state,
                [action.field]: {
                    ...state.types,
                    isLoading: true,
                    errorMessage: null,
                },
            };
        case PokemonsActionTypes.FETCH_RESOLVE:
            return {
                ...state,
                [action.field]: {
                    isLoading: false,
                    data: action.payload,
                    errorMessage: null,
                },
            };
        case PokemonsActionTypes.FETCH_REJECT:
            return {
                ...state,
                [action.field]: {
                    isLoading: false,
                    data: null,
                    errorMessage: action.payload,
                },
            };
        default:
            return state;
    }
};

export const getPokemonTypes = (state: StoreState) => state.pokemons.types.data;
export const isPokemonTypesLoading = (state: StoreState) => state.pokemons.types.isLoading;

export const getFetchAction = (field: StateKey, args?: RequestArguments) => {
    let action;
    switch (field) {
        case "pokemons":
            action = getFetchPokemonsAction(args);
            break;
        case "types":
            action = getFetchTypesAction(args);
    }
    return action;
};

export const getFetchTypesAction = (args?: RequestArguments) => {
    return async (dispatch: Dispatch<PokemonsReducerActions>) => {
        dispatch({ type: PokemonsActionTypes.FETCH, field: "types" });
        try {
            const response = await request("getPokemonTypes", args);
            dispatch({ type: PokemonsActionTypes.FETCH_RESOLVE, field: "types", payload: response });
        } catch (e) {
            console.error(e);
            dispatch({ type: PokemonsActionTypes.FETCH_REJECT, field: "types", payload: e.message });
        }
    };
};

export const getFetchPokemonsAction = (args?: RequestArguments) => {
    return async (dispatch: Dispatch<PokemonsReducerActions>) => {
        dispatch({ type: PokemonsActionTypes.FETCH, field: "pokemons" });
        try {
            const response = await fetchPokemons(args);
            dispatch({ type: PokemonsActionTypes.FETCH_RESOLVE, field: "pokemons", payload: response });
        } catch (e) {
            console.error(e);
            dispatch({ type: PokemonsActionTypes.FETCH_REJECT, field: "pokemons", payload: e.message });
        }
    };
};

export default pokemonsReducer;
