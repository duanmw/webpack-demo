const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = (env) => {
    console.log("👌 ~ env", env)
    return {
        mode: "development",
        // devtool: 'inline-source-map',
        entry: {
            main: './src/index.js',
            main2: './src/index2.js',
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: "Caching",
            })
        ],
        output: {
            clean: true,
            filename: "[name].[contenthash].js",
            path: path.resolve(__dirname, "dist")
        },
        optimization: {
            runtimeChunk: 'single',
            moduleIds: 'deterministic',
            splitChunks: {
                chunks: 'all',
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        // name: 'vendors',
                        name(module, chunks, cacheGroupKey) {
                            // console.log("👌 ~ name ~ module, chunks, cacheGroupKey",  chunks, cacheGroupKey)
                            // const moduleFileName = module
                            //   .identifier()
                            //   .split('/')
                            //   .reduceRight((item) => item);
                            // const allChunksNames = chunks.map((item) => item.name).join('~');
                            // return `${cacheGroupKey}-${allChunksNames}-${moduleFileName}`;
                            return cacheGroupKey
                          },
                        chunks: 'all',
                    },
                },
            },
        },
    }
}