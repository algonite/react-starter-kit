const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader?modules&localIdentName=[name]_[local]_[hash:base64:3]&camelCase=dashes',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("css-loader")
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'url-loader?limit=10000',
      }
    ]
  },
  resolve: {
    alias: {
      $components: __dirname + '/src/components',
      $images: __dirname + '/src/images',
      $variables: __dirname + '/src/variables.scss'
    }
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new HtmlWebpackPlugin({
      template: './src/index.ejs'
    })
  ]
}
