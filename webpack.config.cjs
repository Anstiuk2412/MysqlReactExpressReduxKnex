const path =require('path');
const HTMLWebpackPlugin =require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, 'client/src'),
    mode: "development",
    entry: {
        main: ['@babel/polyfill',path.resolve('client/src/index.js')],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'client/build')
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve('client/src/index.html')
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}
