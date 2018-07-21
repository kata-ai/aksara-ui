const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const StylablePlugin = require('stylable-webpack-plugin');
const stylableOptions = { injectBundleCss: true, nsDelimiter: '--' };

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
        test: /\.svg$/,
        use: [require.resolve('@svgr/webpack')]
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
