const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let generarIndexHtmlPlugin = new HtmlWebpackPlugin({
    title: "Dynamic import fail example repo",
    inject: true
});

module.exports = () => {
    return  {
        devtool: "source-map",
        entry: {
            app: "./src/main"
        },
        output: {
            path: path.resolve(__dirname, "target"),
            filename: "[name].js"
        },
        plugins: [
            generarIndexHtmlPlugin
        ],
    };
};
