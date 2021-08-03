import { Story } from '@storybook/react';
import * as React from 'react';

import { DropdownMenu, DropdownMenuProps } from './components/DropdownMenu';
import { DropdownMenuItem, DropdownMenuDivider, DropdownMenuHeader } from './components/DropdownMenuItem';

export default {
  title: 'Core/Components/Dropdown/DropdownMenu',
  component: [DropdownMenu, DropdownMenuItem, DropdownMenuDivider, DropdownMenuHeader],
  argTypes: {
    block: {
      control: 'number',
    },
  },
};

export const Example: Story<DropdownMenuProps> = args => (
  <DropdownMenu width={200} {...args}>
    <DropdownMenuHeader>Header</DropdownMenuHeader>
    <DropdownMenuItem>Menu Item One</DropdownMenuItem>
    <DropdownMenuItem>Menu Item Two</DropdownMenuItem>
    <DropdownMenuDivider />
    <DropdownMenuItem>Menu Item Three</DropdownMenuItem>
    <DropdownMenuItem>Menu Item Four</DropdownMenuItem>
  </DropdownMenu>
);
Example.args = {
  tipOffset: 24,
};
