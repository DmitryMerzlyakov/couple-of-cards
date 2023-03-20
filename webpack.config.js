const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './start.js',
    mode: 'production',
    oninput: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resourse',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resourse',
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [{ from: 'static', to: 'static' }],
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
    ],
};
