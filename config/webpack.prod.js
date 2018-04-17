const helpers = require('./helpers');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ngtools = require('@ngtools/webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const commonConfig = require('./webpack.common.js');

module.exports = function () {
    return webpackMerge(commonConfig('production'), {
        output: {
            // publicPath: '/assets/',          // 静态资源的url路径前缀
            path: helpers.root('dist'),       
            filename: '[name].[chunkhash].bundle.js',
            chunkFilename: '[id].[chunkhash].chunk.js'
        },

        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: [
                        '@ngtools/webpack'
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
                    test: /\.html$/,
                    use: ['raw-loader']
                }
            ]
        },

        plugins: [
            new ngtools.AotPlugin({
                tsConfigPath: 'tsconfig.json',
                entryModule:  'src/app/app.module#AppModule'
            }),

            // new webpack.optimize.UglifyJsPlugin()
            new UglifyJSPlugin()
        ],
        
        devServer: {
            port: 3001,
        },

    });
}
