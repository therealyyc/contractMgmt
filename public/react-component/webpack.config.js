const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');



const config = {
  mode: 'development',
  entry: './App.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        loader: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: './test.html',// 依赖于哪一个html文件
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './test.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}


module.exports = config