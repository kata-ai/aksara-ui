import * as React from 'react';
import styled from 'styled-components';
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import { themeGet } from '@styled-system/theme-get';
import clsx from 'clsx';

import { Box } from '../../../../layout';
import { Text } from '../../../../typography';
import { theme } from '../../../../theme';

export interface DropdownMenuItemProps extends RadixDropdownMenu.MenuItemProps {
  className?: string;
  style?: React.CSSProperties;
  isActive?: boolean;
  children?: React.ReactNode;
}

const Root = styled(RadixDropdownMenu.Item)`
  border: 1px solid transparent;
  background-color: ${themeGet('colors.grey01', theme.colors.grey01)};
  margin-left: 8px;
  margin-right: 8px;
  border-radius: 8px;
  cursor: pointer;

  &[data-disabled] {
    color: ${themeGet('colors.greymed01', theme.colors.greymed01)};
  }

  &:focus-visible {
    outline: 0px;
  }

  &:focus,
  &.focus {
    background-color: ${themeGet('colors.blue02', theme.colors.blue02)};
  }

  &:hover,
  &.hover {
    background-color: ${themeGet('colors.greylight03', theme.colors.greylight03)};
  }

  &.active {
    border-left: 4px solid ${themeGet('colors.blue07', theme.colors.blue07)};
    background-color: ${themeGet('colors.blue01', theme.colors.blue01)};
  }
`;

const DropdownMenuItem: React.ForwardRefRenderFunction<HTMLDivElement, DropdownMenuItemProps> = (
  { className, style, children, isActive, ...rest },
  ref
) => {
  return (
    <Root className={clsx(isActive && 'active', className)} ref={ref} {...rest}>
      <Box py="xs" px="md" style={style}>
        {typeof children === 'string' ? (
          <Text scale={300} marginLeft={isActive ? '-4px' : ''}>
            {children}
          </Text>
        ) : (
          children
        )}
      </Box>
    </Root>
  );
};

DropdownMenuItem.displayName = 'DropdownMenuItem';

export default React.forwardRef(DropdownMenuItem);
