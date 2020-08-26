import * as React from 'react';
import { select } from '@storybook/addon-knobs';
import { SelectTypeOptionsProp } from '@storybook/addon-knobs/dist/components/types';

import { Box, Text } from '../../../foundations';
import Tooltip from './Tooltip';
import { TooltipSize, TooltipPlacement } from './TooltipInner';

const readme = require('../README.md');

export default {
  title: 'Core/Components/Tooltip',
  component: Tooltip,
  parameters: {
    notes: { markdown: readme },
  },
};

const tooltipSizes: SelectTypeOptionsProp<TooltipSize> = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
};

const tooltipPlacements: SelectTypeOptionsProp<TooltipPlacement> = {
  top: 'top',
  bottom: 'bottom',
  left: 'left',
  right: 'right',
};

export const BasicExample = () => (
  <Box py="xxl" px={128}>
    <Tooltip
      placement={select<TooltipPlacement>('Placement', tooltipPlacements, 'top')}
      size={select<TooltipSize>('Size', tooltipSizes, 'sm')}
      content="Tooltip text"
    >
      <Text>Tooltip Content</Text>
    </Tooltip>
  </Box>
);
