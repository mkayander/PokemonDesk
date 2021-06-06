import { PokemonRaw, PokemonsResponse, PokemonTypes } from "../data/models/response/PokemonsResponse";

export type Endpoint = {
    method: string;
    pathname: string;
};

const config = {
    server: {
        protocol: "https",
        hostname: "zar.hosthot.ru",
        apiRoot: "api/v1",
    },
    endpoints: {
        getPokemons: {
            method: "GET",
            pathname: "pokemons",
        },
        getPokemonById: {
            method: "GET",
            pathname: "pokemon/:id",
        },
        getPokemonTypes: {
            method: "GET",
            pathname: "types",
        },
        createPokemon: {
            method: "POST",
            pathname: "pokemons",
        },
    },
};

export type ApiEndpoints = typeof config.endpoints;

export type ReturnTypeOfEndpoint<T extends keyof ApiEndpoints> = T extends "getPokemons"
    ? PokemonsResponse
    : T extends "getPokemonById"
    ? PokemonRaw
    : T extends "getPokemonTypes"
    ? PokemonTypes
    : any;

export const url = (endpoint: Endpoint) => {
    return `${config.server.protocol}://${config.server.hostname}/${config.server.apiRoot}/${endpoint.pathname}`;
};

export default config;
