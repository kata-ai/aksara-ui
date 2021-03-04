// Create custom theme
// https://storybook.js.org/docs/configurations/theming/

import { create } from '@storybook/theming/create';

const storybookTheme = create({
  base: 'light',
  brandTitle: 'Aksara UI',
  brandUrl: 'https://github.com/kata-ai/aksara-ui',
});

export default storybookTheme;
