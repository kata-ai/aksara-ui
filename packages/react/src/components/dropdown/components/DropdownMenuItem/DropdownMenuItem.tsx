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
  height: auto;
  display: flex;
  align-items: stretch;
  background-color: ${themeGet('colors.grey01', theme.colors.grey01)};
  margin-top: 2px;
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
    border: 1px solid ${themeGet('colors.blue03', theme.colors.blue03)};
  }

  &:hover,
  &.hover {
    border: 1px solid transparent;
    background-color: ${themeGet('colors.greylight03', theme.colors.greylight03)};
  }

  &.active {
    /* border-left: 4px solid ${themeGet('colors.blue07', theme.colors.blue07)}; */
    background-color: ${themeGet('colors.blue01', theme.colors.blue01)};
    color: ${themeGet('colors.blue07', theme.colors.blue07)};
  }
`;

const DropdownMenuItem: React.ForwardRefRenderFunction<HTMLDivElement, DropdownMenuItemProps> = (
  { className, style, children, isActive, ...rest },
  ref
) => {
  const renderLabel = () => {
    if (typeof children === 'string') {
      return (
        <Text scale={300} marginLeft={isActive ? '-4px' : ''}>
          {children}
        </Text>
      );
    }
    return children;
  };
  return (
    <Root className={clsx(isActive && 'active', className)} ref={ref} {...rest}>
      {isActive && (
        <Box
          width={4}
          borderTopLeftRadius={4}
          borderBottomLeftRadius={4}
          height="inherit"
          backgroundColor={theme.colors.blue07}
        />
      )}
      <Box py="xs" px="md" style={style}>
        {renderLabel()}
      </Box>
    </Root>
  );
};

DropdownMenuItem.displayName = 'DropdownMenuItem';

export default React.forwardRef(DropdownMenuItem);
