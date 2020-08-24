import { select } from '@storybook/addon-knobs';
import * as React from 'react';

import { SystemWrapper } from '../../../utils/storybook';
import { Box } from '../../../foundations';
import badgeVariants, { BadgeVariants } from '../variants';

import Badge from './Badge';

export default {
  title: 'Core|Components/Badge',
  component: Badge,
  decorators: [SystemWrapper],
};

const options: Record<string, BadgeVariants> = {};
Object.keys(badgeVariants).forEach((variant: BadgeVariants) => {
  options[variant] = variant;
});
const defaultValue: BadgeVariants = 'base';

export const BasicExample = () => (
  <Box p="md">
    <Badge variant={select<BadgeVariants>('Variant', options, defaultValue)}>example</Badge>
  </Box>
);
