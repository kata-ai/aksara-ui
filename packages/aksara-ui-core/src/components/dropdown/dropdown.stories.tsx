import * as React from 'react';

import { ComponentBlock, SystemWrapper, SystemBlock } from '../../utils/storybook';
import { DropdownMenu } from './components/DropdownMenu';
import { DropdownMenuItem, DropdownMenuDivider, DropdownMenuHeader } from './components/DropdownMenuItem';
import { Stack } from '../../foundations';

const readme = require('./README.md');

export default {
  title: 'Core|Components/Dropdown/DropdownMenu',
  component: [DropdownMenu, DropdownMenuItem, DropdownMenuDivider, DropdownMenuHeader],
  decorators: [SystemWrapper],
  parameters: {
    notes: { markdown: readme },
  },
};

export const BasicExample = () => (
  <SystemBlock title="Dropdown Menu" subtitle="Dropdown menu to be used in a popover element." noBackground>
    <Stack spacing="xl">
      <ComponentBlock title="Usage">
        <DropdownMenu width={200}>
          <DropdownMenuItem>Menu Item One</DropdownMenuItem>
          <DropdownMenuItem>Menu Item Two</DropdownMenuItem>
          <DropdownMenuDivider />
          <DropdownMenuItem>Menu Item Three</DropdownMenuItem>
          <DropdownMenuItem>Menu Item Four</DropdownMenuItem>
        </DropdownMenu>
      </ComponentBlock>
      <ComponentBlock title="Header">
        <DropdownMenu width={200}>
          <DropdownMenuHeader>Header</DropdownMenuHeader>
          <DropdownMenuItem>Menu Item One</DropdownMenuItem>
          <DropdownMenuItem>Menu Item Two</DropdownMenuItem>
        </DropdownMenu>
      </ComponentBlock>
    </Stack>
  </SystemBlock>
);
