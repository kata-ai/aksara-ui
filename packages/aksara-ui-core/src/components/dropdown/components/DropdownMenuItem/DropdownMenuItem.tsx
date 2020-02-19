import * as React from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import clsx from 'clsx';

import { Box, Text } from '../../../../foundations';
import { colors } from '../../../../utils';

export interface DropdownMenuItemProps {
  className?: string;
  style?: React.CSSProperties;
  isActive?: boolean;
}

const Root = styled(Box)`
  border: 1px solid transparent;
  background-color: ${themeGet('colors.grey01', colors.grey01)};
  cursor: pointer;

  &:hover,
  &.hover,
  &:focus,
  &.focus,
  &:active,
  &.active {
    background-color: ${themeGet('colors.indigo01', colors.indigo01)};
  }

  &:focus,
  &.focus,
  &:active,
  &.active {
    border-color: ${themeGet('colors.blue06', colors.blue06)};
    background-color: ${themeGet('colors.indigo01', colors.indigo01)};
  }
`;

const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({ className, style, children, isActive }) => {
  return (
    <Root py="xs" px="md" className={clsx(isActive && 'active', className)} style={style}>
      {typeof children === 'string' ? <Text scale={300}>{children}</Text> : children}
    </Root>
  );
};

export default DropdownMenuItem;
