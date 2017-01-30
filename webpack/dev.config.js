const WebpackNotifierPlugin = require('webpack-notifier');
const config = require('../webpack.config');

config.plugins.push(new WebpackNotifierPlugin());
config.entry.main.push(
  'webpack-dev-server/client?http://localhost:8080'
)

module.exports = config;
