import * as React from 'react';
import { number } from '@storybook/addon-knobs';

import SkeletonBox from './SkeletonBox';

export default {
  title: 'Core/Components/Skeleton/SkeletonBox',
  component: SkeletonBox,
};

export const Example = () => <SkeletonBox style={{ height: number('Height', 200) }} />;
