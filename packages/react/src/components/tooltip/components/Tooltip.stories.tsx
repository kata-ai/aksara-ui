import * as React from 'react';
import { Story } from '@storybook/react';
import { IconPen } from '@aksara-ui/icons';

import { Box } from '../../../layout';
import { IconButton } from '../../button';
import Tooltip, { TooltipProps } from './Tooltip';

export default {
  title: 'Core/Components/Tooltip',
  component: Tooltip,
  argTypes: {
    placement: { options: ['top', 'bottom', 'left', 'right'] },
    size: { options: ['sm', 'md', 'lg'] },
  },
};

export const BasicExample: Story<TooltipProps> = ({ children, ...restArgs }) => (
  <Box py="xxl" px={128}>
    <Tooltip {...restArgs}>{children}</Tooltip>
  </Box>
);

BasicExample.args = {
  placement: 'top',
  size: 'sm',
  content: 'Tooltip text',
  children: (
    <IconButton type="button" aria-label="Edit">
      <IconPen fill="currentColor" aria-hidden />
    </IconButton>
  ),
};
