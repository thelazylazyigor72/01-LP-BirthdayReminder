const path = require('path');

const mode = process.env.NODE_ENV === 'development'
const modeReverse = !mode

const HTMLwebpackPlugin = require('html-webpack-plugin')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js','.css','.scss', '.jsx']
    },
    optimization: {
        minimize: modeReverse,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserWebpackPlugin()
        ]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.s[ac]ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HTMLwebpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace: modeReverse
            }
        }),
        new MiniCssExtractPlugin(),
        new ESLintPlugin()
    ],

    devtool: 'source-map',

    devServer: {
        hot: mode,
        static: {
            directory: path.join(__dirname, 'dist'),
        },
    },
}
