const path = require('path');

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [
            [
              require.resolve('@babel/preset-env'),
              { shippedProposals: true, useBuiltIns: 'usage', corejs: '3' }
            ],
            require.resolve('@babel/preset-react'),
            require.resolve('@babel/preset-typescript')
          ],
          plugins: [
            require.resolve('@babel/plugin-proposal-class-properties'),
            require.resolve('babel-plugin-styled-components')
          ]
        }
      }
    ]
  });

  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.alias = Object.assign({}, config.resolve.alias, {
    '@storybook-utils': path.resolve(__dirname, './'),
    '@kata-kit': path.resolve(__dirname, '../', 'packages')
  });
  config.resolve.mainFields = ['wicara:src', 'kata-kit:src', 'main'];

  return config;
};
