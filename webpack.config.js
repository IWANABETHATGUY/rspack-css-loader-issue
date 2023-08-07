const HtmlPlugin = require("html-webpack-plugin");
const config = require("./rspack.config.js");
delete config.builtins;
config.plugins = [new HtmlPlugin({
  filename: 'index.html',
  template: 'public/index.html',
  inject: 'body',
})]

module.exports = config;
