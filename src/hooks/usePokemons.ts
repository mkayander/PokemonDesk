import { useEffect, useState } from "react";
import { Pokemon } from "../data/models/Pokemon";
import { fetchPokemons } from "../api/api";

const usePokemons = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>();
    const [totalCount, setTotalCount] = useState<number>();

    useEffect(() => {
        fetchPokemons().then(result => {
            setTotalCount(result.total);
            setPokemons(result.pokemons);
        });
    }, []);

    return { pokemons, totalCount };
};

export type PokemonsHook = ReturnType<typeof usePokemons>;

export default usePokemons;
