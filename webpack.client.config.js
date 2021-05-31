const path = require("path"); // NodeJS package to resolve filesystem paths
const HTMLWebpackPlugin = require("html-webpack-plugin");

const { NODE_ENV } = process.env;

console.log(NODE_ENV);

module.exports = {
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    },
    mode: NODE_ENV || "development", // Use Dev mode by default
    entry: path.resolve(__dirname, "src/index.ts"), // Absolute path to app's entry point
    output: {
        path: path.resolve(__dirname, "dist"), // Where to save the bundle
        filename: "main.js", // Bundle filename
    },

    // watch: true,
    // watchOptions: {
    //     ignored: /node_modules/,
    //     poll: 1000 // Lower the default file watcher poll time
    // },

    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                exclude: ["/node_modules/", path.resolve(__dirname, "src/server/server.js")],
                use: ["ts-loader"],
            },
            {
                test: /\.(s*)css$/,
                use: [
                    "style-loader",
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
            // {
            //     test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 name: '[name].[ext]',
            //                 outputPath: 'fonts/',
            //             },
            //         },
            //     ],
            // },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.url.svg/],
                use: ["url-loader"],
            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html"),
        }),
    ],
    devServer: {
        port: 3000, // Webpack dev server port
        open: true, // Open browser as the server starts
        hot: true, // Reload server when project files update
        historyApiFallback: true, // Required to allow different URL's
    },
    devtool: "source-map", // View source code at browser's dev tools
};
