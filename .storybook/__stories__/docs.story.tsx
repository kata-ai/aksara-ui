import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';
import Markdown from 'react-markdown';

import Wrapper from '../components/Wrapper';
import { markdownRenderers } from '../components/DocsElements';

const Readme = require('../../README.md');
const Contributing = require('../../CONTRIBUTING.md');

const StoryWrapper: StoryDecorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;

const story = storiesOf('Documentation', module).addDecorator(StoryWrapper);

story.add('Readme', () => (
  <Markdown source={Readme} renderers={markdownRenderers} />
));
story.add('Contributing Guidelines', () => (
  <Markdown source={Contributing} renderers={markdownRenderers} />
));
