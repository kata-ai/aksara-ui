import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import * as React from 'react';
import { ActionListItem } from '../../../actionList';

export interface DropdownMenuItemProps extends React.ComponentPropsWithoutRef<'div'> {
  className?: string;
  style?: React.CSSProperties;
  isActive?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
}

const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({
  className,
  style,
  children,
  isActive,
  onClick,
  disabled,
}) => {
  return (
    <RadixDropdownMenu.Item asChild disabled={disabled}>
      <ActionListItem
        marginX="sm"
        className={className}
        style={style}
        isActive={isActive}
        onClick={disabled ? undefined : onClick}
      >
        {children}
      </ActionListItem>
    </RadixDropdownMenu.Item>
  );
};

DropdownMenuItem.displayName = 'DropdownMenuItem';

export default DropdownMenuItem;
