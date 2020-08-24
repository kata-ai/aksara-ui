import * as React from 'react';

import { Box as AksaraBox, Stack } from '../../../foundations';
import { SystemWrapper } from '../../../utils/storybook';

import Skeleton from './Skeleton';
import SkeletonBox from './SkeletonBox';

export default {
  title: 'Core|Components/Skeleton',
  component: [Skeleton, SkeletonBox],
  decorators: [SystemWrapper],
};

export const Inline = () => (
  <Stack spacing="md" p="md">
    <AksaraBox>
      <Skeleton />
    </AksaraBox>
    <AksaraBox>
      <Skeleton numberOfLines={2} />
    </AksaraBox>
  </Stack>
);

export const Box = () => (
  <AksaraBox p="md">
    <SkeletonBox style={{ height: 200 }} />
  </AksaraBox>
);
