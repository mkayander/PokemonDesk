const path = require("path"); // NodeJS package to resolve filesystem paths
const HTMLWebpackPlugin = require('html-webpack-plugin')
const NODE_ENV = process.env.NODE_ENV;

module.exports = {
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"]
    },
    mode: NODE_ENV ? NODE_ENV : "development", // Use Dev mode by default
    entry: path.resolve(__dirname, "src/index.js"), // Absolute path to app's entry point
    output: {
        path: path.resolve(__dirname, "dist"), // Where to save the bundle
        filename: "main.js", // Bundle filename
    },
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                use: ["ts-loader"],
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html")
        })
    ]
};
