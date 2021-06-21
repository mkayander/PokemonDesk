import config, { url } from "./config";

describe("config", () => {
    it("Url constructor function", () => {
        expect(() => {
            Object.values(config.endpoints).forEach((value) => {
                console.log(new URL(url(value)));
            })
        }).not.toThrowError()
    })
})