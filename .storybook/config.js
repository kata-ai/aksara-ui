import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';

addDecorator(
  withOptions({
    name: 'Wicara (kata-kit)',
    url: 'https://github.com/kata-ai/kata-kit',
    hierarchySeparator: /\/|\./,
    hierarchyRootSeparator: /\|/
  })
);

const docs = require.context('./', true, /\/__stories__\/.+\.story\.tsx?$/);
const stories = require.context(
  '../packages',
  true,
  /\/__stories__\/.+\.story\.tsx?$/
);

function loadStories() {
  docs.keys().forEach(filename => docs(filename));
  stories.keys().forEach(filename => stories(filename));
}

configure(loadStories, module);
