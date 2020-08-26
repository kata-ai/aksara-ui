import { select } from '@storybook/addon-knobs';
import * as React from 'react';

import badgeVariants, { BadgeVariants } from '../variants';

import Badge from './Badge';

export default {
  title: 'Core/Components/Badge',
  component: Badge,
};

const options: Record<string, BadgeVariants> = {};
Object.keys(badgeVariants).forEach((variant: BadgeVariants) => {
  options[variant] = variant;
});
const defaultValue: BadgeVariants = 'base';

export const BasicExample = () => (
  <Badge variant={select<BadgeVariants>('Variant', options, defaultValue)}>example</Badge>
);
