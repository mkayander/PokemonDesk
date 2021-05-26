import { Pokemon } from "../data/models/Pokemon";
import { PokemonRaw, PokemonsListInfo, PokemonsResponse } from "../data/models/response/PokemonsResponse";
import config from "./config";
import request from "./request";

type UrlQuery = {
    name: string
}

export type PathArguments = {
    query?: UrlQuery
    urlArgs?: Record<string, string>
}

export type ApiOperation<T> = (args?: PathArguments) => Promise<T>;

export type PokemonsApiResult = PokemonsListInfo & {
    pokemons: Pokemon[];
};

export function mapRawPokemon(rawData: PokemonRaw): Pokemon {
    return {
        ...rawData,
        cleanName: rawData.name_clean,
        stats: {
            ...rawData.stats,
            specialAttack: rawData.stats["special-attack"],
            specialDefense: rawData.stats["special-defense"],
        },
        baseExperience: rawData.base_experience,
        isDefault: rawData.is_default,
    };
}

export const fetchPokemons: ApiOperation<PokemonsApiResult> = async (args) => {
    const data: PokemonsResponse = await request(config.endpoints.getPokemons, args);

    console.log("***: newData: ", data);

    return {
        ...data,
        pokemons: data.pokemons.map(value => mapRawPokemon(value)),
    };
};

export const fetchPokemonById: ApiOperation<Pokemon> = async (args) => {
    const data: PokemonRaw = await request(config.endpoints.getPokemonById, args);

    return mapRawPokemon(data);
};
