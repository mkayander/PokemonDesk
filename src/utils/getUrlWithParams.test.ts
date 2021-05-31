import { UrlObject } from "url";
import getUrlWithParams from "./getUrlWithParams";
import config from "../api/config";

describe("getUrlWithParams.ts", () => {
    test("Must return correct UrlObject for endpoint without query and arguments", () => {
        const result = getUrlWithParams(config.endpoints.getPokemons);

        const keys = Object.keys(result);
        expect(keys).toContain("protocol");
        expect(keys).toContain("hostname");
        expect(keys).toContain("pathname");
        expect(keys).toContain("query");

        expect(result).toEqual<UrlObject>({
            protocol: "https",
            hostname: "zar.hosthot.ru",
            pathname: "/api/v1/pokemons",
            query: undefined,
        });
    });

    test("Must return correct UrlObject for endpoint with 'Pikachu' GET query", () => {
        const result = getUrlWithParams(config.endpoints.getPokemons, { query: { name: "Pikachu" } });

        expect(result).toEqual<UrlObject>({
            protocol: "https",
            hostname: "zar.hosthot.ru",
            pathname: "/api/v1/pokemons",
            query: { name: "Pikachu" },
        });
    });

    test("Must return correct UrlObject for endpoint without 'id' positional URL argument", () => {
        const result = getUrlWithParams(config.endpoints.getPokemonById, { urlArgs: {id: "25"} });

        expect(result).toEqual<UrlObject>({
            protocol: "https",
            hostname: "zar.hosthot.ru",
            pathname: "/api/v1/pokemon/25",
            query: undefined,
        });
    });

    test("Must return correct UrlObject for endpoint without 'id' positional URL argument", () => {
        const result = getUrlWithParams(config.endpoints.getPokemonById, { urlArgs: {id: "25"} });

        expect(result).toEqual<UrlObject>({
            protocol: "https",
            hostname: "zar.hosthot.ru",
            pathname: "/api/v1/pokemon/25",
            query: undefined,
        });
    });

    test("Must return correct UrlObject for POST endpoint", () => {
        const result = getUrlWithParams(config.endpoints.createPokemon);

        expect(result).toEqual<UrlObject>({
            protocol: "https",
            hostname: "zar.hosthot.ru",
            pathname: "/api/v1/pokemons",
            query: undefined,
        });
    });
});
