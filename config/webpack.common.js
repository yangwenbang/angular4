const helpers = require('./helpers');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = function (NODE_ENV) {
  return {
    devtool: 'inline-source-map',

    entry: {
        polyfills: './src/polyfills.ts',
        vendor: './src/vendor.ts',
        app: './src/main.ts'
    },
    
    resolve: {
        extensions: ['.ts', '.js'],     //用来解析 modules
        modules: [helpers.root('src'), 'node_modules'],   // 解析当前目录
    },

     plugins: [
         // 解决 core.es5
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,/angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            helpers.root('../src'), 
            {} 
        ),

        // 能够识别共用的模块,并把它们放在共用的块
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        //复制文件夹到assets
        new CopyWebpackPlugin([
            {
                from: 'src/assets',
                to: 'assets',
            }
        ]),

        // 通过 webpack 简化了 html 页面
        new HtmlWebpackPlugin({
            favicon: 'src/assets/images/favicon.ico',  
            template: 'src/index.html'
        }),

        //定义变量
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(NODE_ENV)
            }
        }),
        
    ],

    devServer: {
        contentBase: 'src/',       // 确定 app 的根目录，也就是 index.html 的路径
        inline: true,
        stats: 'errors-only',
        historyApiFallback: true,       // 配置为true, 当访问的文件不存在时, 返回根目录下的index.html文件
        
        // historyApiFallback: {
        //     index: '/assets/'        // 指定index.html文件的url路径
        // },
        watchOptions: {
            aggregateTimeout: 100,
            poll: 500
        },
        // proxy: {
        //     '/xx': {
        //         target: 'http://xxxxxxx',
        //         secure: false
        //     }
        // }
    },

    node: {
        global: true,
        crypto: 'empty',
        __dirname: true,
        __filename: true,
        Buffer: false,
        clearImmediate: false,
        setImmediate: false
    }
  }
}
