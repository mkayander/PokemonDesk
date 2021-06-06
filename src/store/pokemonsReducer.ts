import { Dispatch, Reducer } from "redux";
import { ApiData } from "../hooks/useApiData";
import request from "../api/request";

type PokemonsState = {
    types: ApiData<any>;
};

export enum PokemonsActionTypes {
    FETCH_TYPES,
    FETCH_TYPES_RESOLVE,
    FETCH_TYPES_REJECT,
}

const initialState: PokemonsState = {
    types: {
        isLoading: false,
        data: null,
        errorMessage: null,
    },
};

type TypesAction = {
    type: PokemonsActionTypes.FETCH_TYPES | PokemonsActionTypes.FETCH_TYPES_RESOLVE;
    payload?: string[];
};

type RejectAction = {
    type: PokemonsActionTypes.FETCH_TYPES_REJECT;
    payload: string;
};

type PokemonsReducerActions = TypesAction | RejectAction;

const pokemonsReducer: Reducer<PokemonsState, PokemonsReducerActions> = (state = initialState, action) => {
    switch (action.type) {
        case PokemonsActionTypes.FETCH_TYPES:
            return {
                ...state,
                types: {
                    ...state.types,
                    isLoading: true,
                    errorMessage: null,
                },
            };
        case PokemonsActionTypes.FETCH_TYPES_RESOLVE:
            return {
                ...state,
                types: {
                    isLoading: false,
                    data: action.payload,
                    errorMessage: null,
                },
            };
        case PokemonsActionTypes.FETCH_TYPES_REJECT:
            return {
                ...state,
                types: {
                    isLoading: false,
                    data: null,
                    errorMessage: action.payload,
                },
            };
        default:
            return state;
    }
};

export const getFetchTypesAction = () => {
    return async (dispatch: Dispatch<PokemonsReducerActions>) => {
        dispatch({ type: PokemonsActionTypes.FETCH_TYPES });
        try {
            const response = await request("getPokemonTypes");
            console.log("## - response: ", response);
            dispatch({ type: PokemonsActionTypes.FETCH_TYPES_RESOLVE, payload: response });
        } catch (e) {
            console.error(e);
            dispatch({ type: PokemonsActionTypes.FETCH_TYPES_REJECT, payload: e });
        }
    };
};

export default pokemonsReducer;
