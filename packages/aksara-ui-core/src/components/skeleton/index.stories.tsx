import * as React from 'react';

import { Box, Stack } from '../../foundations';
import { ComponentBlock, SystemWrapper, SystemBlock, SystemSubheading } from '../../utils/storybook';

import Skeleton from './components/Skeleton';
import SkeletonBox from './components/SkeletonBox';

const readme = require('./README.md');

export default {
  title: 'Core|Components/Skeleton',
  component: [Skeleton, SkeletonBox],
  decorators: [SystemWrapper],
  parameters: {
    notes: { markdown: readme },
  },
};

export const BasicExample = () => (
  <SystemBlock title="Skeleton" subtitle="Renders a loading state that mimics the wrapping component.">
    <SystemSubheading mb="xl">Basic Example</SystemSubheading>
    <Stack spacing="xl">
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
    </Stack>
  </SystemBlock>
);
