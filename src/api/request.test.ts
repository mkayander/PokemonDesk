import request from "./request";
import config from "./config";

describe("request.ts", () => {
    test("Must disallow the use of POST request without body", () => {
        expect(request(config.endpoints.createPokemon)).rejects.toThrow(Error);
    });

    test("Must disallow the body at the GET request", () => {
        expect(request(config.endpoints.getPokemons, { body: { id: 12 } })).rejects.toThrow(Error);
    });
});
