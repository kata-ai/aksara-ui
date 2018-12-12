import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';
import Markdown from 'react-markdown';

import Wrapper from '@storybook-utils/components/Wrapper';
import { markdownRenderers } from '@storybook-utils/components/DocsElements';
import IntroHeader from '@storybook-utils/components/IntroHeader';

import Introduction from '@docs/introduction.md';
import GettingStarted from '@docs/getting-started.md';
import Contributing from '@docs/contributing.md';
import UsingAssets from '@docs/using-assets.md';
import Fonts from '@docs/fonts.md';
import Theming from '@docs/theming.md';

const StoryWrapper: StoryDecorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;

const story = storiesOf('Documentation', module).addDecorator(StoryWrapper);

story.add('Introduction', () => (
  <div>
    <IntroHeader>
      <img src={require('../../../assets/wicara-banner.png')} />
      <div>
        <p>
          <strong>wicara /wi·ca·ra/ (noun)</strong>
          <br />
          the expression of or the ability to express thoughts and feelings by
          articulate sounds.
        </p>

        <p>
          <a href="https://travis-ci.org/kata-ai/wicara">
            <img
              alt="Build Status"
              src="https://img.shields.io/travis/kata-ai/wicara.svg"
            />
          </a>{' '}
          <a href="https://codecov.io/gh/kata-ai/wicara">
            <img
              alt="codecov"
              src="https://codecov.io/gh/kata-ai/wicara/branch/master/graph/badge.svg"
            />
          </a>{' '}
          <a href="https://lernajs.io/">
            <img
              alt="Maintained with Lerna"
              src="https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg"
            />
          </a>
        </p>
      </div>
    </IntroHeader>
    <Markdown source={Introduction} renderers={markdownRenderers} />
  </div>
));
story.add('Getting Started', () => (
  <Markdown source={GettingStarted} renderers={markdownRenderers} />
));
story.add('Contributing', () => (
  <Markdown source={Contributing} renderers={markdownRenderers} />
));
story.add('Using Assets', () => (
  <Markdown source={UsingAssets} renderers={markdownRenderers} />
));
story.add('Fonts', () => (
  <Markdown source={Fonts} renderers={markdownRenderers} />
));
story.add('Theming', () => (
  <Markdown source={Theming} renderers={markdownRenderers} />
));
