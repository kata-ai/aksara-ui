import * as React from 'react';
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import styled from 'styled-components';
import { Box } from '../../../../layout';
import { ActionList } from '../../../actionList';

export interface DropdownMenuContentProps extends RadixDropdownMenu.DropdownMenuArrowProps {
  children?: React.ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  width?: number | string;
}

const Arrow = styled(RadixDropdownMenu.Arrow)`
  fill: #ffffff;
`;

const DropdownMenuContent: React.ForwardRefRenderFunction<HTMLDivElement, DropdownMenuContentProps> = ({
  children,
  side,
  offset,
  width,
}) => {
  return (
    <RadixDropdownMenu.Content side={side} sideOffset={4}>
      <Box textAlign="left" width={width} maxWidth="100vw" borderRadius="lg" overflow="hidden" boxShadow={3} py="xs">
        <ActionList>{children}</ActionList>
      </Box>
      {offset && <Arrow offset={offset} width={20} height={8} />}
    </RadixDropdownMenu.Content>
  );
};

export default DropdownMenuContent;
