const port = process.env.PORT || 8888
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    output: {
        path: path.join(__dirname, '/build'),
        filename: "main.js",
        chunkFilename:"[name].bundle.[fullhash].js"
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test:  /\.gif$/,
                use: {
                    loader:'file-loader'
                },
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
         }),
         new CleanWebpackPlugin(),
         new MiniCssExtractPlugin({filename:'[name].[fullhash].css'})
    ],
    optimization: {
        minimizer: [
          new CssMinimizerPlugin(),
        ],
      },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    devServer: {
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        open: true
    }
}