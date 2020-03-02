const path = require('path');

module.exports = {
  stories: ['../src/**/*.{story,stories}.{ts,tsx}'],
  addons: [
    {
      name: '@storybook/preset-typescript',
      options: {
        tsLoaderOptions: {
          configFile: path.resolve(__dirname, '../tsconfig.json'),
        },
        tsDocgenLoaderOptions: {
          tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
        },
        forkTsCheckerWebpackPluginOptions: {
          colors: false, // disables built-in colors in logger messages
        },
        include: [path.resolve(__dirname, '../src')],
      },
    },
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-links',
    '@storybook/addon-notes',
    '@storybook/addon-a11y',
    'storybook-addon-jsx/',
  ],
  webpackFinal: config => {
    config.resolve.mainFields = ['wicara:src', 'main'];
    return config;
  },
};
