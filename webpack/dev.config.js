const config = require('../webpack.config');

config.entry.main.push(
  'webpack-dev-server/client?http://localhost:8080'
)

module.exports = config;
