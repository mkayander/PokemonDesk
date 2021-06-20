const webpackClientConfig = require("./webpack.client.config");
const webpackServerConfig = require("./webpack.server.config");

const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();

if (process.env.NODE_ENV === "development") {
    module.exports = [smp.wrap(webpackClientConfig)];
} else {
    module.exports = [smp.wrap(webpackClientConfig), new SpeedMeasurePlugin().wrap(webpackServerConfig)];
}
