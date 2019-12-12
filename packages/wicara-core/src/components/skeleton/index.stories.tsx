import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { WicaraProvider, Box } from '../../foundations';
import {
  StoryContainer,
  StoryHeader,
  StorybookWrapper,
  ComponentBlock
} from '../../utils/storybook';

import Skeleton from './components/Skeleton';
import SkeletonBox from './components/SkeletonBox';

const readme = require('./README.md');

const story = storiesOf('Core|Components/Skeleton', module).addDecorator(StorybookWrapper);

story.add(
  'default',
  () => (
    <WicaraProvider>
      <StoryContainer>
        <StoryHeader
          title="Skeleton"
          subtitle="Renders a loading state that mimics the wrapping component."
        />
        <ComponentBlock title="Inline">
          <Box mb="md">
            <Skeleton />
          </Box>
          <Box>
            <Skeleton numberOfLines={2} />
          </Box>
        </ComponentBlock>
        <ComponentBlock title="Box">
          <SkeletonBox style={{ height: 200 }} />
        </ComponentBlock>
      </StoryContainer>
    </WicaraProvider>
  ),
  {
    notes: { markdown: readme }
  }
);
