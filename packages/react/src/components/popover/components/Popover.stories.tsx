import * as React from 'react';

import { Card } from '../../../layout';
import { Button } from '../../button';
import { DropdownMenu, DropdownMenuItem } from '../../dropdown';
import Popover from './Popover';

export default {
  title: 'Core/Components/Popover',
  component: Popover,
};

export const BasicExample = () => {
  return (
    <Popover
      trigger={
        <Button block variant="primary">
          Toggle Popover
        </Button>
      }
    >
      <Card mt="xs" p="md" style={{ width: 250 }} elevation={3}>
        This is a popover
      </Card>
    </Popover>
  );
};

export const WithDropdownMenu = () => {
  return (
    <Popover
      trigger={
        <Button block variant="primary">
          Toggle Popover
        </Button>
      }
      placement="bottom-start"
    >
      <DropdownMenu width={200}>
        <DropdownMenuItem>Menu Item One</DropdownMenuItem>
        <DropdownMenuItem>Menu Item Two</DropdownMenuItem>
        <DropdownMenuItem>Menu Item Three</DropdownMenuItem>
        <DropdownMenuItem>Menu Item Four</DropdownMenuItem>
      </DropdownMenu>
    </Popover>
  );
};
