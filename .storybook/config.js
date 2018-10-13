import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { setDefaults } from '@storybook/addon-info';
import { StoryState } from '@dump247/storybook-state';
import WithState from './components/WithState';

setOptions({
  name: 'Wicara (kata-kit)',
  url: 'https://github.com/kata-ai/kata-kit'
});

const req = require.context('../', true, /\/__stories__\/.+\.story\.tsx?$/);

setDefaults({
  inline: true,
  source: false,
  propTablesExclude: [WithState, StoryState]
});

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
