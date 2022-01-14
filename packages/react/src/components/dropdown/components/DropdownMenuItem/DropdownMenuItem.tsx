import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import * as React from 'react';
import { CSSObject } from '../../../../system';
import { ActionListItem } from '../../../action-list';

export interface DropdownMenuItemProps extends RadixDropdownMenu.MenuItemProps {
  className?: string;
  itemStyle?: CSSObject;
  isActive?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
}

const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({
  className,
  style,
  children,
  isActive,
  onSelect,
  disabled,
  itemStyle,
  ...rest
}) => {
  return (
    <RadixDropdownMenu.Item asChild disabled={disabled} onSelect={onSelect} {...rest}>
      <ActionListItem className={className} style={style} sx={{ ...itemStyle }} isActive={isActive}>
        {children}
      </ActionListItem>
    </RadixDropdownMenu.Item>
  );
};

DropdownMenuItem.displayName = 'DropdownMenuItem';

export default DropdownMenuItem;
