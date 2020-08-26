const path = require('path');

module.exports = {
  stories: ['../src/**/*.{story,stories}.mdx', '../src/**/*.{story,stories}.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-knobs', '@storybook/addon-links'],
};
