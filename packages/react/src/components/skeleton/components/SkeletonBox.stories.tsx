import * as React from 'react';
import { Story } from '@storybook/react';

import SkeletonBox, { SkeletonBoxProps } from './SkeletonBox';

export default {
  title: 'Core/Components/Skeleton/SkeletonBox',
  component: SkeletonBox,
};

export const Example: Story<SkeletonBoxProps> = args => <SkeletonBox {...args} />;

Example.args = {
  style: {
    height: 200,
  },
};
