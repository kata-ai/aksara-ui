import * as React from 'react';
import { number } from '@storybook/addon-knobs';

import { SystemWrapper } from '../../../utils/storybook';

import Skeleton from './Skeleton';

export default {
  title: 'Core|Components/Skeleton/Skeleton',
  component: Skeleton,
  decorators: [SystemWrapper],
};

export const Example = () => <Skeleton numberOfLines={number('Number of Lines', 1)} />;
