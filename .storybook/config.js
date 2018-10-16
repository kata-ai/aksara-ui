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

const req = require.context(
  '../packages',
  true,
  /\/__stories__\/.+\.story\.tsx?$/
);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
