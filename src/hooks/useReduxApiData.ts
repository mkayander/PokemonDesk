import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RequestArguments } from "../api/api";
import { getFetchAction, PokemonsState, StateKey } from "../store/pokemonsReducer";
import { StoreState } from "../store";

export interface ApiData<T> {
    data: T | null | undefined;
    isLoading: boolean;
    errorMessage: string | null;
}

export const emptyApiData = { data: null, isLoading: false, errorMessage: null };

function useReduxApiData<K extends StateKey>(field: K, args?: RequestArguments, deps: any[] = []): PokemonsState[K] {
    const dispatch = useDispatch();

    const data = useSelector((state: StoreState) => state.pokemons[field]);

    useEffect(() => {
        dispatch(getFetchAction(field, args));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [...deps]);

    return data;
}

export default useReduxApiData;
