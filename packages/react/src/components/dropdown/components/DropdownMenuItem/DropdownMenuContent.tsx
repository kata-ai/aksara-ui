import * as React from 'react';
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import { Box } from '../../../../layout';

export interface DropdownMenuContentProps extends RadixDropdownMenu.DropdownMenuArrowProps {
  children?: React.ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
}

const DropdownMenuContent: React.ForwardRefRenderFunction<HTMLDivElement, DropdownMenuContentProps> = (
  { children, side, offset },
  ref
) => {
  return (
    <RadixDropdownMenu.Content side={side} ref={ref}>
      {offset && <RadixDropdownMenu.DropdownMenuArrow />}
      <Box
        display="inline-block"
        textAlign="left"
        width="inherit"
        maxWidth="100vw"
        marginTop={11}
        borderRadius="xs"
        overflow="hidden"
        boxShadow={3}
        py="xs"
      >
        {children}
      </Box>
    </RadixDropdownMenu.Content>
  );
};

export default React.forwardRef(DropdownMenuContent);
