const StylablePlugin = require('stylable-webpack-plugin');
const stylableOptions = { injectBundleCss: true, nsDelimiter: '--' };

module.exports = {
  devtool: 'source-map',
  entry: {},
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        // TODO: use fork-ts-checker-webpack-plugin
        options: {}
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
  plugins: [new StylablePlugin(stylableOptions)]
};
