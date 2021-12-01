import * as React from 'react';
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import styled from 'styled-components';
import { Stack } from '../../../../layout';

export interface DropdownMenuContentProps extends RadixDropdownMenu.DropdownMenuArrowProps {
  children?: React.ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  width?: number | string;
}

const Arrow = styled(RadixDropdownMenu.Arrow)`
  fill: #ffffff;
`;

const DropdownMenuContent: React.ForwardRefRenderFunction<HTMLDivElement, DropdownMenuContentProps> = (
  { children, side, offset, width },
  ref
) => {
  return (
    <RadixDropdownMenu.Content side={side} sideOffset={4} ref={ref}>
      <Stack
        spacing="xxs"
        direction="vertical"
        textAlign="left"
        width={width}
        maxWidth="100vw"
        borderRadius="lg"
        overflow="hidden"
        boxShadow={3}
        py="xs"
      >
        {children}
      </Stack>
      {offset && <Arrow offset={offset} width={20} height={8} />}
    </RadixDropdownMenu.Content>
  );
};

export default React.forwardRef(DropdownMenuContent);
