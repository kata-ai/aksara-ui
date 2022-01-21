import * as React from 'react';
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import styled from 'styled-components';
import { Box, BoxProps } from '../../../../layout';
import { ActionList } from '../../../action-list';
import { theme } from '../../../../theme';

export interface DropdownMenuContentProps {
  children?: React.ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
  width?: number | string;
  arrowOffset?: number;
}

const Arrow = styled(RadixDropdownMenu.Arrow)`
  fill: #ffffff;
`;

const ContentBox = React.forwardRef<HTMLDivElement, React.PropsWithChildren<BoxProps>>(
  ({ children, ...props }, ref) => {
    return (
      <Box ref={ref} textAlign="left" maxWidth="100vw" borderRadius="lg" overflow="hidden" boxShadow={3} {...props}>
        {children}
      </Box>
    );
  }
);
const BoxFilterDropdShadowSupport = styled(ContentBox)`
  @supports (filter: drop-shadow(0px 2px 4px #000)) {
    filter: drop-shadow(${theme.shadows[2]});
    box-shadow: none;
  }
`;

const DropdownMenuContent: React.ForwardRefRenderFunction<HTMLDivElement, DropdownMenuContentProps> = ({
  children,
  side = 'bottom',
  arrowOffset = 14,
  width,
  align = 'start',
}) => {
  return (
    <RadixDropdownMenu.Content side={side} align={align} sideOffset={4}>
      <BoxFilterDropdShadowSupport width={width}>
        <ActionList>{children}</ActionList>
      </BoxFilterDropdShadowSupport>
      <Arrow offset={arrowOffset} width={20} height={8} />
    </RadixDropdownMenu.Content>
  );
};

export default DropdownMenuContent;
