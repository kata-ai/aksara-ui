import * as React from 'react';
import { Story } from '@storybook/react';

import { Box } from '../../../layout';
import { Text } from '../../../typography';
import Tooltip, { TooltipProps } from './Tooltip';

const readme = require('../README.md');

export default {
  title: 'Core/Components/Tooltip',
  component: Tooltip,
  parameters: {
    notes: { markdown: readme },
  },
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
  children: <Text>Tooltip Content</Text>,
};
