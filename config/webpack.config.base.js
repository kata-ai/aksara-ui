const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const StylablePlugin = require('stylable-webpack-plugin');
const stylableOptions = { outputCSS: false, includeCSSInJS: true };

module.exports = {
  devtool: 'source-map',
  entry: {},
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
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },
  output: {
    filename: '[name].js',
    pathinfo: true
  },
  plugins: [
    new StylablePlugin(stylableOptions),
    new ForkTsCheckerWebpackPlugin()
  ]
};
