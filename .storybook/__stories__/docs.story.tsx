import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';
import Markdown from 'react-markdown';

import Wrapper from '../components/Wrapper';
import { markdownRenderers } from '../components/DocsElements';

import Introduction from '@docs/introduction.md';
import GettingStarted from '@docs/getting-started.md';

const StoryWrapper: StoryDecorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;

const story = storiesOf('Documentation', module).addDecorator(StoryWrapper);

story.add('Introduction', () => (
  <Markdown source={Introduction} renderers={markdownRenderers} />
));
story.add('Getting Started', () => (
  <Markdown source={GettingStarted} renderers={markdownRenderers} />
));
