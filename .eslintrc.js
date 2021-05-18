module.exports = {
    env: {
        browser: true,
    },
    extends: ["airbnb", "airbnb/hooks", "react-app", "prettier", "prettier/react"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: ["prettier", "react", "@typescript-eslint"],
    rules: {
        "@typescript-eslint/no-unused-vars": "warn",
        "no-console": "off",
        "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx", ".ts", ".js"] }],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                ts: "never",
                tsx: "never",
                js: "never",
                jsx: "never",
            },
        ],
        "react/self-closing-comp": "warn",
        "react/prop-types": "off",
        "react/jsx-props-no-spreading": [
            "warn",
            {
                html: "ignore",
                custom: "enforce",
            },
        ],
        // "import/newline-after-import": ["warn", { count: 1 }],

        "no-shadow": "off",
        "@typescript-eslint/no-shadow": ["error"],
    },
    settings: {
        "import/resolver": {
            webpack: {
                config: "webpack.config.js",
            },
        },
    },
};
