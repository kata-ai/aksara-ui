import { addParameters } from '@storybook/react';
import storybookTheme from './storybookTheme';

// use custom theme
addParameters({
  options: {
    theme: storybookTheme,
  },
});
