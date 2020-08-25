const path = require('path');

module.exports = {
  stories: ['../src/**/*.{story,stories}.{ts,tsx}'],
  addons: ['@storybook/addon-actions', '@storybook/addon-knobs', '@storybook/addon-links', '@storybook/addon-notes'],
  webpackFinal: config => {
    config.module.rules.push({
      test: /\.tsx?$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [['react-app', { flow: false, typescript: true }]],
          },
        },
      ],
    });

    config.resolve.extensions.push('.ts', '.tsx');
    config.resolve.mainFields = ['aksara:src', 'main'];
    return config;
  },
};
