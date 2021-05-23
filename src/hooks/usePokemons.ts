import { useEffect, useState } from "react";
import { fetchPokemons, PokemonsApiResult } from "../api/api";

const usePokemons = () => {
    const [data, setData] = useState<PokemonsApiResult>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    useEffect(() => {
        fetchPokemons()
            .then(result => {
                setData(result);
                setErrorMessage(null);
            })
            .catch(reason => setErrorMessage(reason.message))
            .finally(() => setIsLoading(false));
    }, []);

    return { data, isLoading, errorMessage };
};

export type PokemonsHook = ReturnType<typeof usePokemons>;

export default usePokemons;
