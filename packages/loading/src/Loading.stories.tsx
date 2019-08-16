import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';

import RootWrapper from '../../../.storybook/components/Wrapper';

import Circle from './Circle';
import Robot from './Robot';
import InfiniteScrollSpinner from './InfiniteScrollSpinner';

const readme = require('../README.md');

const StoryWrapper: StoryDecorator = storyFn => (
  <RootWrapper>{storyFn()}</RootWrapper>
);

storiesOf('Components|Loading', module)
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
  });
