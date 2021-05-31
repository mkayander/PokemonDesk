module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    moduleNameMapper: {
        "^.+\\.(css|less|scss|sass)$": "identity-obj-proxy",
        "^.+\\.(svg|png)$": "identity-obj-proxy",
    },
};
