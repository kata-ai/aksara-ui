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
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  output: {
    filename: '[name].js',
    pathinfo: true
  },
  devServer: {
    disableHostCheck: true
  },
  plugins: [
    new StylablePlugin(stylableOptions),
    new ForkTsCheckerWebpackPlugin()
  ]
};
