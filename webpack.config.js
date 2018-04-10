const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'eslint-loader',
      enforce: 'pre',
      exclude: /node_modules/,
      options: {
        formatter: require('eslint-friendly-formatter'),
      },
    }, {
      test: /\.jsx?$/,
      use: 'babel-loader',
      include: [resolve('src'), resolve('test')],
    }, {
      test: /\.styl$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[name]-[local]_[hash:base64:5]',
          },
        }, {
          loader: 'stylus-loader',
        }],
    }],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'assets/index.html',
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
  ],
}
