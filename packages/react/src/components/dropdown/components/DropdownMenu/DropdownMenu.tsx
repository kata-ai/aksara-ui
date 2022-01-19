import * as React from 'react';
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import { Box } from '../../../../layout';

export interface DropdownMenuProps extends RadixDropdownMenu.DropdownMenuProps {
  children?: React.ReactNode;
  width?: number;
  maxWidth?: number;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ children, width, maxWidth, ...rest }) => {
  return (
    <RadixDropdownMenu.Root {...rest}>
      <Box width={width} maxWidth={maxWidth}>
        {children}
      </Box>
    </RadixDropdownMenu.Root>
  );
};

DropdownMenu.displayName = 'DropdownMenu';

export default DropdownMenu;
