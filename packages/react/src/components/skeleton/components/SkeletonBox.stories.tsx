import * as React from 'react';

import SkeletonBox from './SkeletonBox';

export default {
  title: 'Core/Components/Skeleton/SkeletonBox',
  component: SkeletonBox,
};

export const Example = () => (
  <SkeletonBox
    style={{
      height: 200,
    }}
  />
);
