import { Story } from '@storybook/react';
import * as React from 'react';

import { DropdownMenu, DropdownMenuProps } from './components/DropdownMenu';
import { DropdownMenuItem, DropdownMenuDivider, DropdownMenuHeader } from './components/DropdownMenuItem';
import DropdownMenuTrigerer from './components/DropdownMenuItem/DropdownMenuTrigerer';
import { Box } from '../../layout';
import DropdownMenuContent, { DropdownMenuContentProps } from './components/DropdownMenuItem/DropdownMenuContent';

export default {
  title: 'Core/Components/Dropdown/DropdownMenu',
  component: [DropdownMenu, DropdownMenuItem, DropdownMenuDivider, DropdownMenuHeader],
  argTypes: {
    side: {
      control: { type: 'select', options: ['top', 'bottom', 'left', 'right'] },
    },
  },
};

export const Example: Story<DropdownMenuProps & DropdownMenuContentProps> = ({ side }) => (
  <DropdownMenu>
    <DropdownMenuTrigerer>
      <Box>Hello</Box>
    </DropdownMenuTrigerer>
    <DropdownMenuContent side={side}>
      <DropdownMenuItem disabled>Hello again</DropdownMenuItem>
      <DropdownMenuDivider />
      <DropdownMenuItem>Hello again 2</DropdownMenuItem>
      <DropdownMenuDivider />
      <DropdownMenuItem>Hello again 3</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

Example.args = {
  side: 'bottom',
};
