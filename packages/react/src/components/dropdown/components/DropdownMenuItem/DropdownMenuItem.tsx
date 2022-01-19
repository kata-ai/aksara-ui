import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import * as React from 'react';
import { ActionListItem, ActionListItemProps } from '../../../action-list';

export interface DropdownMenuItemProps
  extends RadixDropdownMenu.MenuItemProps,
    Pick<
      ActionListItemProps,
      'className' | 'style' | 'isActive' | 'children' | 'disabled' | 'variant' | 'containerStyle' | 'contentStyle'
    > {}

const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({
  className,
  style,
  children,
  isActive,
  onSelect,
  disabled,
  containerStyle,
  contentStyle,
  ...rest
}) => {
  return (
    <RadixDropdownMenu.Item asChild disabled={disabled} onSelect={onSelect} {...rest}>
      <ActionListItem
        className={className}
        style={style}
        containerStyle={containerStyle}
        isActive={isActive}
        contentStyle={contentStyle}
      >
        {children}
      </ActionListItem>
    </RadixDropdownMenu.Item>
  );
};

DropdownMenuItem.displayName = 'DropdownMenuItem';

export default DropdownMenuItem;
