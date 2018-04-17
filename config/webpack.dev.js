const helpers = require('./helpers');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = function () {
  return webpackMerge(commonConfig('development'), {
    output: {
        path: helpers.root('dist'),        
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js'
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'awesome-typescript-loader',
                    'angular2-router-loader',
                    'angular2-template-loader'
                ],
                exclude: /node_modules/
            }, 
            {
                test: /\.css$/,
                use: ['to-string-loader', 'css-loader', 'postcss-loader']
            }, 
            {
                test: /\.scss$/,
                use: ['to-string-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
                use:[{
                        loader: 'url-loader',
                        options: {
                            limit: 10000
                        }
                    }]
            },
            {
                test: /\.html$/,
                use: ['raw-loader']
            }
        ]
    },
    
    devServer: {
        port: 3000,
    },
  });
}
