import { useEffect, useState } from "react";
import { Pokemon } from "../data/models/Pokemon";

const usePokemons = () => {
    const [pokemons, setPokemons] = useState<Pokemon>();
    const [totalCount, setTotalCount] = useState<number>();

    useEffect(() => {
        fetch("https://zar.hosthot.ru/api/v1/pokemons")
            .then(response => response.json())
            .then(data => {
                console.log("***: newData: ", data);
                setTotalCount(data.total);
                setPokemons(data.pokemons);
            });
    }, []);

    return { pokemons, totalCount };
};

export type PokemonsHook = ReturnType<typeof usePokemons>;

export default usePokemons;
