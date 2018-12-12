import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';

addDecorator(
  withOptions({
    name: 'Wicara (kata-kit)',
    url: 'https://github.com/kata-ai/wicara',
    hierarchySeparator: /\/|\./,
    hierarchyRootSeparator: /\|/
  })
);

const stories = require.context('../', true, /\/__stories__\/.+\.story\.tsx?$/);

function loadStories() {
  stories.keys().forEach(filename => stories(filename));
}

configure(loadStories, module);
