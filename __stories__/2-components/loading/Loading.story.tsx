import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';

import RootWrapper from '@storybook-utils/components/Wrapper';

import Circle from '@kata-kit/loading/src/Circle';
import Robot from '@kata-kit/loading/src/Robot';
import InfiniteScrollSpinner from '@kata-kit/loading/src/InfiniteScrollSpinner';

const StoryWrapper: StoryDecorator = storyFn => (
  <RootWrapper>{storyFn()}</RootWrapper>
);

const story = storiesOf('Components|Loading', module).addDecorator(
  StoryWrapper
);

story.add('Circle', () => <Circle />);

story.add('Robot', () => <Robot />);

story.add('InfiniteScrollSpinner', () => <InfiniteScrollSpinner />);
