const path = require("path"); // NodeJS package to resolve filesystem paths
const nodeExternals = require("webpack-node-externals");
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { NODE_ENV } = process.env;

console.log(NODE_ENV);

module.exports = {
    target: "node",
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    },
    mode: NODE_ENV || "development", // Use Dev mode by default
    entry: path.resolve(__dirname, "src/server/server.jsx"), // Absolute path to app's entry point
    output: {
        path: path.resolve(__dirname, "dist"), // Where to save the bundle
        filename: "server.js", // Bundle filename
    },
    externals: [nodeExternals()],
    // plugins: [
    //     new MiniCssExtractPlugin({
    //         attributes: {
    //             id: 'target',
    //             'data-target': 'example',
    //         },
    //     }),
    // ],
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                use: ["ts-loader"],
            },
            {
                test: /\.(s*)css$/,
                use: [
                    // "style-loader",
                    // MiniCssExtractPlugin.loader,
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
