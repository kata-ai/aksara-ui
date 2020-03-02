import { addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { jsxDecorator } from 'storybook-addon-jsx';
import storybookTheme from './storybookTheme';

// Accessibility addon
// https://github.com/storybooks/storybook/tree/master/addons/a11y
if (process.env.NODE_ENV === 'development') {
  addDecorator(withA11y);
}

// JSX addon
// https://github.com/storybooks/addon-jsx
addDecorator(jsxDecorator);
addParameters({
  jsx: {
    showDefaultProps: false,
  },
});

// use custom theme
addParameters({
  options: {
    theme: storybookTheme,
  },
});
