import * as React from 'react';
import { number } from '@storybook/addon-knobs';

import { SystemWrapper } from '../../../utils/storybook';

import SkeletonBox from './SkeletonBox';

export default {
  title: 'Core|Components/Skeleton/SkeletonBox',
  component: SkeletonBox,
  decorators: [SystemWrapper],
};

export const Example = () => <SkeletonBox style={{ height: number('Height', 200) }} />;
