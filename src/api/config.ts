// type Endpoint = {
//     name?: string;
//     method: string;
//     pathname: string;
// };

// class Config {
//     protocol: string = "https";
//
//     constructor(protocol: string, hostname: string, apiRoot: string, endpoints: { [p: string]: Endpoint }) {
//         this.protocol = protocol;
//         this.hostname = hostname;
//         this.apiRoot = apiRoot;
//         this.endpoints = endpoints;
//     }
//
//     hostname: string;
//
//     apiRoot: string;
//
//     endpoints: {
//         [n: string]: Endpoint
//     } = {}
// }
//
// const config = new Config(
//     "http",
//     "zar.hosthot.ru",
//     "api/v1/",
//     {
//         getPokemons: {
//             method: "GET",
//             pathname: "pokemons",
//         }
//     }
// )

// class Endpoint {
//     constructor(config: Config, method: string, pathname: string) {
//         this.config = config;
//         this.method = method;
//         this.pathname = pathname;
//     }
//
//     config: Config;
//
//     method: string;
//
//     pathname: string;
//
//     url = () => {
//         return `${this.config.server.protocol}//${this.config.server.hostname}/${this.config.server.apiRoot}/${this.pathname}`;
//     };
// }

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
    },
};

export const url = (endpoint: Endpoint) => {
    return `${config.server.protocol}://${config.server.hostname}/${config.server.apiRoot}/${endpoint.pathname}`;
};

export default config;
