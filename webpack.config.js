const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: 'babel-loader',
      include: [resolve('src'), resolve('test')],
    }, {
      test: /\.styl$/,
      use: [{
        loader: 'file-loader',
      }, {
        loader: 'extract-loader',
      }, {
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          modules: true,
        }
      }, {
        loader: 'stylus-loader'
      },]
    }]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'assets/index.html'
    })
  ],
}
