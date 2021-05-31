import config, { url } from "./config";

describe("config", () => {
    it("Url constructor function", () => {
        expect(url(config.endpoints.getPokemons).length > 10).toBe(true)
    })
})