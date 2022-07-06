const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        //#region 
        // rules: [{
        //     // 只要匹配上一个 loader, 其他的就不匹配
        //     oneOf: [
        //         {
        //             test: /\.less$/,
        //             use: [
        //                 'style-loader',
        //                 'css-loader',
        //                 'less-loader'
        //             ]
        //         },
        //         {
        //             test: /\.css$/i,
        //             use: ["style-loader", "css-loader"]
        //         },
        //         {
        //             test: /\.(png|svg|jpg|jpeg|gif)$/i,
        //             type: 'asset/resource',
        //         },
        //         {
        //             test: /\.(woff|woff2|eot|ttf|otf)$/i,
        //             type: 'asset/resource',
        //         },
        //         {
        //             test: /\.js$/,
        //             // exclude: /node_modules/, // 排除node_modules代码不编译
        //             include: path.resolve(__dirname, "./src"), // 包含xxx
        //             loader: "babel-loader",
        //             options: {
        //                 presets: ['@babel/preset-env']
        //             }
        //         },
        //     ]
        // }]
        //#endregion
        //#region 
        rules: [
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.js$/,
                // exclude: /node_modules/, // 排除node_modules代码不编译
                include: path.resolve(__dirname, "./src"), // 包含xxx
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env']
                }
            },
        ]
        //#endregion
    }
}