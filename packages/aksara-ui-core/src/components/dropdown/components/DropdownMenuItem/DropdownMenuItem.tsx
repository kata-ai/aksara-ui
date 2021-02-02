import * as React from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import clsx from 'clsx';

import { Box, Text } from '../../../../foundations';
import { theme } from '../../../../theme';

export interface DropdownMenuItemProps {
  className?: string;
  style?: React.CSSProperties;
  isActive?: boolean;
  children?: React.ReactNode;
}

const Root = styled(Box)`
  border: 1px solid transparent;
  background-color: ${themeGet('colors.grey01', theme.colors.grey01)};
  cursor: pointer;

  &:hover,
  &.hover,
  &:focus,
  &.focus,
  &:active,
  &.active {
    background-color: ${themeGet('colors.indigo01', theme.colors.indigo01)};
  }

  &:focus,
  &.focus,
  &:active,
  &.active {
    border-color: ${themeGet('colors.blue06', theme.colors.blue06)};
    background-color: ${themeGet('colors.indigo01', theme.colors.indigo01)};
  }
`;

const DropdownMenuItem: React.ForwardRefRenderFunction<HTMLDivElement, DropdownMenuItemProps> = (
  { className, style, children, isActive },
  ref
) => {
  return (
    <Root ref={ref} py="xs" px="md" className={clsx(isActive && 'active', className)} style={style}>
      {typeof children === 'string' ? <Text scale={300}>{children}</Text> : children}
    </Root>
  );
};

DropdownMenuItem.displayName = 'DropdownMenuItem';

export default React.forwardRef(DropdownMenuItem);
