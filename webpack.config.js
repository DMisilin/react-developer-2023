const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const {TsconfigPathsPlugin} = require("tsconfig-paths-webpack-plugin");

const port = 3030;
const dist = path.join(__dirname, 'dist');
const host = 'localhost';

module.exports = {
    entry: "./src/index.tsx",
    mode: 'development',
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        //@ts-ignore
        plugins: [new TsconfigPathsPlugin()]
    },
    output: {
        path: dist,
        publicPath: `http://${host}:${port}/`,
        filename: `js/[name].js`,
        chunkFilename: `js/[name].js`,
    },
    devServer: {
        port,
        hot: true,
        historyApiFallback: true,
        host,
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                    transpileOnly: true
                },
                exclude: /dist/
            },
            {
                exclude: "/node_modules/",
                test: /\.css$/,
                use: ['style-loader','css-loader'],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new webpack.DefinePlugin({
            "process.env.NAME": JSON.stringify(require("./package.json").name),
            "process.env.VERSION": JSON.stringify(require("./package.json").version)
        }),
        new ForkTsCheckerWebpackPlugin()
    ],
};
