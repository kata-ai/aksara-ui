import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';

import RootWrapper from '../../../.storybook/components/Wrapper';

import Circle from '../src/Circle';
import Robot from '../src/Robot';
import InfiniteScrollSpinner from '../src/InfiniteScrollSpinner';

const StoryWrapper: StoryDecorator = storyFn => (
  <RootWrapper>{storyFn()}</RootWrapper>
);

const story = storiesOf('Components|Loading', module).addDecorator(
  StoryWrapper
);

story.add('Circle', () => <Circle />);

story.add('Robot', () => <Robot />);

story.add('InfiniteScrollSpinner', () => <InfiniteScrollSpinner />);
