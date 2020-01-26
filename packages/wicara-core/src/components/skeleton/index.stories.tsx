import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Box } from '../../foundations';
import {
  ComponentBlock,
  SystemWrapper,
  SystemHeader,
  SystemContainer
} from '../../utils/storybook';

import Skeleton from './components/Skeleton';
import SkeletonBox from './components/SkeletonBox';

const readme = require('./README.md');

const story = storiesOf('Core|Components/Skeleton', module).addDecorator(SystemWrapper);

story.add(
  'default',
  () => (
    <>
      <SystemHeader
        title="Skeleton"
        subtitle="Renders a loading state that mimics the wrapping component."
      />
      <SystemContainer>
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
      </SystemContainer>
    </>
  ),
  {
    notes: { markdown: readme }
  }
);
