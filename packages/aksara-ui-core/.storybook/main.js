module.exports = {
  stories: ['../src/**/*.{story,stories}.mdx', '../src/**/*.{story,stories}.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/preset-typescript',
    '@storybook/addon-essentials',
    '@storybook/addon-knobs',
    '@storybook/addon-links',
  ],
};
