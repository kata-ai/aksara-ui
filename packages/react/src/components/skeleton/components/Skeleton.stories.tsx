import * as React from 'react';
import { Story } from '@storybook/react';

import Skeleton, { SkeletonProps } from './Skeleton';

export default {
  title: 'Core/Components/Skeleton/Skeleton',
  component: Skeleton,
  argTypes: {
    style: {
      control: null,
    },
    className: {
      control: null,
    },
  },
};

export const Example: Story<SkeletonProps> = ({ numberOfLines }) => <Skeleton numberOfLines={numberOfLines} />;

Example.args = {
  numberOfLines: 1,
};
