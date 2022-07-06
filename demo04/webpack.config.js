const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: "development",
    // devtool: 'inline-source-map',
    // devtool: false,
    // devtool: "eval",
    entry: {
        index: './src/index.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Development",
        }),
    ],
    output: {
        clean: true,
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    // devServer: {
    //     static: './dist',
    //     hot: true,
    // },
}