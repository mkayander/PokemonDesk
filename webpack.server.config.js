const path = require("path"); // NodeJS package to resolve filesystem paths
const nodeExternals = require("webpack-node-externals")

const { NODE_ENV } = process.env;

console.log(NODE_ENV);

module.exports = {
    target: "node",
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    },
    mode: NODE_ENV || "development", // Use Dev mode by default
    entry: path.resolve(__dirname, "src/server/server.js"), // Absolute path to app's entry point
    output: {
        path: path.resolve(__dirname, "dist"), // Where to save the bundle
        filename: "server.js", // Bundle filename
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                use: ["ts-loader"],
            },
            {
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                mode: "local",
                                localIdentName: "[name]__[local]__[hash:base64:5]",
                                auto: /\.module\.\w+$/i,
                                exportLocalsConvention: "camelCase",
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.component.svg$/,
                use: ["@svgr/webpack", "url-loader"],
            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.url.svg/],
                use: ["url-loader"],
            },
        ],
    },
};
