const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: ['./src']
  },
  output: {
    path: './dist',
    filename: 'bundle-[hash].js',
    publicPath: '/'
  },
  devServer: {
    outputPath: './dist'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0'],
          plugins: ['babel-plugin-transform-decorators-legacy']
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.ejs'
    })
  ]
}
