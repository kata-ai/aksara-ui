import * as React from 'react';
import { number } from '@storybook/addon-knobs';

import Skeleton from './Skeleton';

export default {
  title: 'Core/Components/Skeleton/Skeleton',
  component: Skeleton,
};

export const Example = () => <Skeleton numberOfLines={number('Number of Lines', 1)} />;
