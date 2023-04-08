const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { Template } = require('webpack');


const isProdaction = process.env.NODE_ENV === 'production';


module.exports = {
    entry: './start.js',
    mode: isProdaction ? 'production' : 'development', 
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    module: {
        rules: [
            {
              test: /\.css$/,
              use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
              test: /\.(png|svg|jpg|jpeg|gif)$/i,
              type: "asset/resource",
            },
            {
              test: /\.(woff|woff2|eot|ttf|otf)$/i,
              type: "asset/resource",
            },
          ],
      },
    optimization: {
        minimizer: [
            '...',
            new CssMinimizerPlugin(),
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CopyPlugin({
            patterns: [{ from: 'static', to: 'static'}]
        })],
    devtool: isProdaction ? "hidden-source-map" : "source-map",
};