const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');


const js = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: 'development', // mode: 'production'
    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: {
        top: './assets/src/js/top.js'
    },
    // ファイルの出力設定
    output: {
        path    : `${__dirname}/assets/dist/js`,    // 出力先の絶対パス
        filename: '[name].bundle.js'    // バンドルして書き出すファイル名の設定
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
        }],
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            _: 'underscore',
        })
    ]
};

const css = {
    // メインとなるscssファイル（エントリーポイント）
    entry: {
        top: './assets/src/scss/top.scss'
    },
    // ファイルの出力設定
    output: {
        path: `${__dirname}/assets/dist/css`,
        filename: '[name].css',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css-loader!sass-loader')
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ],
}

module.exports = [js, css];