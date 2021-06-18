import request from "./request";

describe("request.ts", () => {
    test("Must disallow the use of POST request without body", () => {
        expect(request("createPokemon")).rejects.toThrow(Error);
    });

    test("Must disallow the body at the GET request", () => {
        expect(request("getPokemons", { body: { id: 12 } })).rejects.toThrow(Error);
    });
});
