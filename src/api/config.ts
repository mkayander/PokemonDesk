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
            pathname: "pokemon/:id/"
        }
    },
};

export const url = (endpoint: Endpoint) => {
    return `${config.server.protocol}://${config.server.hostname}/${config.server.apiRoot}/${endpoint.pathname}`;
};

export default config;
