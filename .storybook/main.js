module.exports = {
  stories: [
    '../packages/aksara-ui-core/src/**/*.{story,stories}.mdx',
    '../packages/aksara-ui-core/src/**/*.{story,stories}.@(js|jsx|ts|tsx)',
    '../packages/aksara-icons/src/**/*.{story,stories}.mdx',
    '../packages/aksara-icons/src/**/*.{story,stories}.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-essentials', '@storybook/addon-knobs', '@storybook/addon-links'],
  webpackFinal: config => {
    config.resolve.mainFields = ['aksara:src', 'main'];
    return config;
  },
};
