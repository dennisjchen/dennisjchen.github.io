var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  favicon: 'favicon.ico',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    filename: "bundle.js",
    path: __dirname
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: __dirname + '/app',
        loader: "babel"
      },
      {
          test: /\.scss$/,
          include: __dirname + '/app',
          loaders: ['style', 'css', 'sass']
      },
      {
          test: /\.(png|gif)$/,
          loader: 'url-loader?mimetype=image/png'
      }
    ]
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
         NODE_ENV: JSON.stringify("production")
       }
    })
  ],
  resolve: require('./webpack.resolve.js')
};
