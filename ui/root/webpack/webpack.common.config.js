const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        polyfills: "./src/polyfills.ts",
        vendor: "./src/vendor.ts",
        main: "./src/main.ts"
    },
    output: {
        path: "/var/www/html/nobugs-justfeatures",
        filename: "[name].bundle.js",
    },
    resolve: {
        extensions: [".js", ".ts", ".html", ".less"]
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                use: ["awesome-typescript-loader", "angular2-template-loader"]
            },
            {
                test: /\.html$/,
                use: "html-loader"
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({ fallback: "style-loader", use: ["css-loader", "less-loader"] })
            },
            {
                test: /\.css$/,
                use: "raw-loader"
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['main', 'vendor', 'polyfills']
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            showErrors: true,
            title: "Webpack App",
            path: path.join(__dirname, "../dist/"),
            hash: true
        }),
        new ExtractTextPlugin("[name].css"),
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            path.resolve(__dirname, "../src")
        )
    ]
};