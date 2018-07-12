const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/template.html",
});

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname),
        filename: "bundle.js",
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                loader: "babel-loader",
                options: {
                    presets: ["env", "react"]
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                  'url-loader?limit=10000',
                  'img-loader'
                ]
            }
        ],
    },
    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "src")
        ],
        extensions: [".js", ".json", ".jsx", ".css", ".html", ".md"],
        alias: {
            "src": path.resolve(__dirname, "src"),
            "public": path.resolve(__dirname, "public")
        }
    },
    devtool: "source-map",
    context: __dirname,
    target: "web",
    devServer: {
        contentBase: "./",
        compress: true,
        historyApiFallback: true,
        hot: true,
        https: false,
        noInfo: false
    },
    plugins: [
        new CleanWebpackPlugin(["dist"], {}),
        htmlPlugin
    ]
}