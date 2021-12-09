const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'client/src'),
  mode: 'development',
  entry: {
    main: ['@babel/polyfill', path.resolve('client/src/index.js')],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'client/build'),
    publicPath: '/'
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'client/src/components'),
      actions: path.resolve(__dirname, 'client/src/actions'),
      lib: path.resolve(__dirname, 'client/src/lib'),
    },
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve('client/src/index.html'),
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false
        }
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf)(\?[a-z0-9=.]+)?$/,
        use: "url-loader?limit=100000",
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
};