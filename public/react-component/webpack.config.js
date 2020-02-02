const path = require('path')


const config = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.s(c|a)ss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      }
    ]
  }
}


module.exports = config