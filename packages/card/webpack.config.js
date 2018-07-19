const path = require('path');
const config = require('../../config/webpack.config.base');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = Object.assign({}, config, {
  mode: isProduction ? 'production' : 'development',
  entry: {
    index: './src/index.ts'
  },
  output: {
    path: path.resolve(__dirname, 'lib')
  }
});
