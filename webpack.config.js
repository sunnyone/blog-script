const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const SRC_DIR = path.resolve(__dirname, 'src');
const DEST_DIR = path.resolve(__dirname, 'dist');

module.exports = {
    entry: {
        'blog-script': './src/ts/blog-script.ts',
        'blog-style': './src/scss/blog-style.scss'
    },

    output: {
        filename: '[name].js',
        path: DEST_DIR
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            {
              test: /\.vue$/,
              loader: 'vue-loader'
            },

            // {
            //     test: /\.ts$/,
            //     exclude: /node_modules/,
            //     enforce: 'pre',
            //     use: [
            //         {
            //             loader: 'tslint-loader',
            //             options: {
            //                 emitErrors: true
            //             }
            //         }
            //     ],
            // },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    },
                    {
                        loader: 'ts-loader'
                    }
                ],
            },

            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                modules: false
                            }
                        },
                        {
                            loader: "sass-loader"
                        }
                    ]
                })
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin('[name].css'),
        new CopyWebpackPlugin([
            { from: 'examples', to: 'examples' }
        ]),
        new VueLoaderPlugin()
    ],

    devtool: 'cheap-module-source-map',
    devServer: {
        contentBase: 'dist',
        port: 3000,
    }

};