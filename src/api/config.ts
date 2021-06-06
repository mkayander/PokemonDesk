export type Endpoint = {
    name?: string;
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
            pathname: "types"
        },
        createPokemon: {
            method: "POST",
            pathname: "pokemons",
        },
    },
    /**
     * Disallow the use of 'body' in the request for the following methods
     */
    nonBodyMethods: ["GET", "DELETE", "TRACE", "OPTIONS", "HEAD"],
};

export const url = (endpoint: Endpoint) => {
    return `${config.server.protocol}://${config.server.hostname}/${config.server.apiRoot}/${endpoint.pathname}`;
};

export default config;
