import { Reducer } from "redux";
import { ApiData } from "../hooks/useApiData";

type PokemonsState = {
    types: ApiData<any>;
};

type PokemonsAction = {
    type: "FETCH_TYPES" | "FETCH_TYPES_RESOLVE" | "FETCH_TYPES_REJECT";
    payload: any;
};

const initialState: PokemonsState = {
    types: {
        isLoading: false,
        data: null,
        errorMessage: null,
    },
};

const pokemonsReducer: Reducer<PokemonsState, PokemonsAction> = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_TYPES":
            return {
                ...state,
                types: {
                    ...state.types,
                    isLoading: true,
                    errorMessage: null,
                },
            };
        case "FETCH_TYPES_RESOLVE":
            return {
                ...state,
                types: {
                    isLoading: false,
                    data: action.payload,
                    errorMessage: null,
                },
            };
        case "FETCH_TYPES_REJECT":
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

export default pokemonsReducer;
