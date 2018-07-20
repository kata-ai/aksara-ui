const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('../config/webpack.config.base');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = Object.assign({}, config, {
  mode: isProduction ? 'production' : 'development',
  entry: {
    demo: path.resolve(__dirname, './src/index.tsx')
  },
  output: {
    ...config.output,
    filename: '[name].[chunkhash:8].js',
    chunkFilename: '[name].[chunkhash:8].chunk.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  resolve: {
    ...config.resolve,
    mainFields: ['kata-kit:src', 'main']
  },
  plugins: [
    ...config.plugins,
    new HtmlWebpackPlugin({
      title: 'kata-kit',
      template: path.join(__dirname, 'public/index.html'),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    })
  ],
  devServer: {
    disableHostCheck: true
  }
});
