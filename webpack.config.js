const path = require('path');
const webpack = require('webpack');

const HTMLWebpackPlugin = require('html-webpack-plugin');

const SOURCE_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'build');

const TEMPLATE_HTML = path.resolve(SOURCE_DIR, 'template.html');

module.exports = {
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      path.resolve(SOURCE_DIR, 'entry.js'),
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(BUILD_DIR),
    publicPath: '/',
  },
  devServer: {
    host: 'localhost',
    port: 3000,
    hot: true,
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader',
    }],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: TEMPLATE_HTML,
      inject: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
