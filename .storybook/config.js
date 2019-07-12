import { configure, addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { themes } from '@storybook/theming';
import { jsxDecorator } from 'storybook-addon-jsx';

// Accessibility addon
// https://github.com/storybooks/storybook/tree/master/addons/a11y
addDecorator(withA11y);

// JSX addon
// https://github.com/storybooks/addon-jsx
addDecorator(jsxDecorator);
addParameters({
  jsx: {
    showDefaultProps: false
  }
});

// use custom theme
addParameters({
  options: {
    theme: themes.light
  }
});

const stories = require.context('../', true, /\.story\.tsx?$/);
function loadStories() {
  stories.keys().forEach(stories);
}

configure(loadStories, module);
