/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');

/** @type {import('@rspack/core').Configuration} */
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    publicPath: '/',
  },
  devtool: false,
  builtins: {
    html: [
      {
        filename: 'index.html',
        template: 'public/index.html',
        inject: 'body',
      },
    ],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [ "css-loader"],
      }
    ]
  },
  optimization: {
  }
};
