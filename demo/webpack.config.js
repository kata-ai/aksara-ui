const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  devtool: 'source-map',
  mode: isProduction ? 'production' : 'development',
  entry: {
    demo: path.resolve(__dirname, './src/index.tsx')
  },
  output: {
    pathinfo: true,
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    mainFields: ['kata-kit:src', 'main']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: require.resolve('ts-loader'),
            options: {}
          }
        ]
      },
      {
        // exclude css from stylable component
        test: /^(?!.*\.st\.css$).*\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: [
          {
            loader: require.resolve('url-loader'),
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.(bmp|gif|jpe?g|svg)$/,
        loader: require.resolve('file-loader'),
        options: {
          name: 'media/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(ttf|eot|otf|woff|woff2)$/,
        loader: require.resolve('file-loader'),
        options: {
          name: 'media/[name].[hash:8].[ext]'
        }
      }
    ]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
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
    disableHostCheck: true,
    hot: true,
    historyApiFallback: {
      // Paths with dots should still use the history fallback.
      // See https://github.com/facebookincubator/create-react-app/issues/387.
      disableDotRule: true
    }
  }
};
