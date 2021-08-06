const path = require('path');

module.exports = {
  stories: ['../src/**/*.{story,stories}.mdx', '../src/**/*.{story,stories}.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-knobs', '@storybook/addon-links'],
  babel: async options => ({
    ...options,
    plugins: [...options.plugins, '@babel/plugin-proposal-class-properties'],
  }),
  webpackFinal: config => {
    config.resolve.mainFields = ['aksara:src', 'main'];
    return config;
  },
};
