import { Story } from '@storybook/react';
import * as React from 'react';

import { Button } from '../button';
import { ButtonGroup } from '../button-group';
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
    align: {
      control: { type: 'select', options: ['start', 'center', 'end'] },
    },
  },
};

interface Obj {
  header?: string;
  label?: string;
  value?: string;
  disabled?: boolean;
}

const dropdownList: Obj[] = [
  { header: 'Group one' },
  { label: 'Item one', value: 'itemOne' },
  { label: 'Item two', value: 'itemTwo', disabled: true },
  { label: 'Item three', value: 'itemThree' },
  { header: 'Group two' },
  { label: 'Item one-one', value: 'itemOneOne' },
  { label: 'Item one-two', value: 'itemOneTwo' },
];

export const Example: Story<DropdownMenuProps & DropdownMenuContentProps> = ({ side, align }) => {
  const [selected, setSelected] = React.useState<Obj>(dropdownList[1]);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      backgroundColor="greylight03"
      width="100%"
      height={640}
    >
      <DropdownMenu width={200}>
        <DropdownMenuTrigerer>
          <Button>Trigger</Button>
        </DropdownMenuTrigerer>
        <DropdownMenuContent width={200} side={side} align={align}>
          {dropdownList.map((val, idx) => (
            <Box key={val.header || val.value} px={'sm'}>
              {val.header ? (
                <>
                  {idx !== 0 && <DropdownMenuDivider />}
                  <DropdownMenuHeader>{val.header}</DropdownMenuHeader>
                </>
              ) : (
                <DropdownMenuItem
                  onSelect={() => setSelected(val)}
                  isActive={selected.value === val.value}
                  disabled={val.disabled}
                >
                  {val.label}
                </DropdownMenuItem>
              )}
            </Box>
          ))}
          <Box>
            <DropdownMenuDivider />
            <Box display="flex" justifyContent="flex-end" px="xs">
              <ButtonGroup>
                <Button>Action</Button>
                <Button variant="primary">Action</Button>
              </ButtonGroup>
            </Box>
          </Box>
        </DropdownMenuContent>
      </DropdownMenu>
    </Box>
  );
};
Example.args = {
  side: 'bottom',
  align: 'start',
};
