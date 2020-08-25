import * as React from 'react';

import { SystemWrapper } from '../../utils/storybook';
import { DropdownMenu } from './components/DropdownMenu';
import { DropdownMenuItem, DropdownMenuDivider, DropdownMenuHeader } from './components/DropdownMenuItem';

export default {
  title: 'Core|Components/Dropdown/DropdownMenu',
  component: [DropdownMenu, DropdownMenuItem, DropdownMenuDivider, DropdownMenuHeader],
  decorators: [SystemWrapper],
};

export const Example = () => (
  <DropdownMenu width={200}>
    <DropdownMenuHeader>Header</DropdownMenuHeader>
    <DropdownMenuItem>Menu Item One</DropdownMenuItem>
    <DropdownMenuItem>Menu Item Two</DropdownMenuItem>
    <DropdownMenuDivider />
    <DropdownMenuItem>Menu Item Three</DropdownMenuItem>
    <DropdownMenuItem>Menu Item Four</DropdownMenuItem>
  </DropdownMenu>
);
