import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';

import RootWrapper from '../../../.storybook/components/Wrapper';

import Circle from './Circle';
import Robot from './Robot';
import InfiniteScrollSpinner from './InfiniteScrollSpinner';

const readme = require('../README.md');

const StoryWrapper: StoryDecorator = storyFn => (
  <RootWrapper>{storyFn()}</RootWrapper>
);

storiesOf('Components|Loading', module)
  .addDecorator(withKnobs)
  .addDecorator(StoryWrapper)
  .add('Circle', () => <Circle />, {
    notes: {
      markdown: readme
    }
  })
  .add('Robot', () => <Robot />, {
    notes: {
      markdown: readme
    }
  })
  .add('InfiniteScrollSpinner', () => <InfiniteScrollSpinner />, {
    notes: {
      markdown: readme
    }
  })
  .add(
    'Examples',
    () => <Circle size={number('Size', 40)} color={text('color', '#006fe6')} />,
    {
      info: { disable: true }
    }
  );
