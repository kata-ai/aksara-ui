// TODO: Not using standard `.babelrc` atm due to some weird issue, will maybe
// look into fixing it in the future.

/**
 * Base Babel config generated for our webpack config.
 *
 * @param {boolean} prod true if webpack is running in production mode.
 */
const babelPreset = prod => ({
  presets: ['@babel/preset-react', '@babel/preset-env'],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-import-meta',
    ['@babel/plugin-proposal-class-properties', { loose: false }],
    '@babel/plugin-proposal-json-strings',
    ['babel-plugin-styled-components', { displayName: !prod, minify: prod }],
    'react-hot-loader/babel',
    'react-loadable/babel'
  ]
});

module.exports = babelPreset;
