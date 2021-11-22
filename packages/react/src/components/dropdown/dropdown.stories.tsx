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

interface Obj {
  header?: string;
  label?: string;
  value?: string;
}

const dropdownList: Obj[] = [
  { header: 'Group one' },
  { label: 'Item one', value: 'itemOne' },
  { label: 'Item two', value: 'itemTwo' },
  { label: 'Item three', value: 'itemThree' },
  { header: 'Group two' },
  { label: 'Item one-one', value: 'itemOneOne' },
  { label: 'Item one-two', value: 'itemOneTwo' },
];

export const Example: Story<DropdownMenuProps & DropdownMenuContentProps> = ({ side }) => {
  const [selected, setSelected] = React.useState<Obj>(dropdownList[1]);

  return (
    <DropdownMenu width={200}>
      <DropdownMenuTrigerer>
        <Box cursor="pointer" border="1px solid #494949" p={12} borderRadius={8}>
          {selected.label}
        </Box>
      </DropdownMenuTrigerer>
      <DropdownMenuContent width={200} side={side}>
        {dropdownList.map((val, idx) => (
          <Box key={val.header || val.value}>
            {val.header ? (
              <>
                {idx !== 0 && <DropdownMenuDivider />}
                <DropdownMenuHeader>{val.header}</DropdownMenuHeader>
              </>
            ) : (
              <DropdownMenuItem onClick={() => setSelected(val)} isActive={selected.value === val.value}>
                {val.label}
              </DropdownMenuItem>
            )}
          </Box>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const WithArrow: Story<DropdownMenuProps & DropdownMenuContentProps> = ({ side }) => {
  const [selected, setSelected] = React.useState<Obj>(dropdownList[1]);

  return (
    <DropdownMenu width={200}>
      <DropdownMenuTrigerer>
        <Box cursor="pointer" border="1px solid #494949" p={12} borderRadius={8}>
          {selected.label}
        </Box>
      </DropdownMenuTrigerer>
      <DropdownMenuContent offset={14} width={200} side={side}>
        {dropdownList.map((val, idx) => (
          <Box key={val.header || val.value}>
            {val.header ? (
              <>
                {idx !== 0 && <DropdownMenuDivider />}
                <DropdownMenuHeader>{val.header}</DropdownMenuHeader>
              </>
            ) : (
              <DropdownMenuItem onClick={() => setSelected(val)} isActive={selected.value === val.value}>
                {val.label}
              </DropdownMenuItem>
            )}
          </Box>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

Example.args = {
  side: 'bottom',
};
