/* eslint-disable camelcase */

export type PokemonsListInfo = {
    total: number;
    count: number;
    offset: number;
    limit: number;
}

export type PokemonRaw = {
    name_clean: string;
    abilities: string[];
    stats: {
        hp: number;
        attack: number;
        defense: number;
        "special-attack": number;
        "special-defense": number;
        speed: number;
    };
    types: string[];
    img: string;
    name: string;
    base_experience: number;
    height: number;
    id: number;
    is_default: true;
    order: number;
    weight: number;
}

export type PokemonTypes = string[]

export type PokemonsResponse = PokemonsListInfo & {
    pokemons: Array<PokemonRaw>;
};
