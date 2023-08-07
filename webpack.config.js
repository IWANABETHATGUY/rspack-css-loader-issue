const config = require('./rspack.config.js')
delete config.builtins

module.exports = config;
