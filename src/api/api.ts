import { Pokemon } from "../data/models/Pokemon";
import { PokemonsListInfo, PokemonsResponse } from "../data/models/response/PokemonsResponse";
import config from "./config";
import request from "./request";

export type PokemonsApiResult = PokemonsListInfo & {
    pokemons: Pokemon[];
};

export const fetchPokemons = async (): Promise<PokemonsApiResult> => {
    const data: PokemonsResponse = await request(config.endpoints.getPokemons);

    console.log("***: newData: ", data);

    return {
        ...data,
        pokemons: data.pokemons.map(value => {
            const { stats: rawStats } = value;

            const instance: Pokemon = {
                ...value,
                cleanName: value.name_clean,
                stats: {
                    ...rawStats,
                    specialAttack: rawStats["special-attack"],
                    specialDefense: rawStats["special-defense"],
                },
                baseExperience: value.base_experience,
                isDefault: value.is_default,
            };

            return instance;
        }),
    };
};

export const send = () => {};
