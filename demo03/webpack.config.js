const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
// #region 
// module.exports = {
//     mode: "development",
//     entry: {
//         index: {
//             import: './src/index.js',
//             dependOn: 'shared', // webpack 5
//         },
//         another: {
//             import: './src/another-module.js',
//             dependOn: 'shared',
//         },
//         shared: 'lodash',
//     },
//     optimization: {
//         splitChunks: {
//             chunks: 'all',
//         },
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             title: "Development",
//         }),
//     ],
//     output: {
//         clean: true,
//         filename: "[name].bundle.js",
//         path: path.resolve(__dirname, "dist")
//     },
//     // devServer: {
//     //     static: './dist',
//     //     hot: true,
//     // },
// }
// #endregion

// #region
module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        another: './src/another-module.js'
    },
    output: {
        clean: true,
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Development",
        }),
    ],
    devServer: {
        static: './dist',
        hot: true,
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    }
};
// #endregion