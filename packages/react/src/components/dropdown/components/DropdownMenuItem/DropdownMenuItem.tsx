import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import * as React from 'react';
import { ActionListItem } from '../../../actionList';

export interface DropdownMenuItemProps extends RadixDropdownMenu.MenuItemProps {
  className?: string;
  style?: React.CSSProperties;
  isActive?: boolean;
  children?: React.ReactNode;
}

const DropdownMenuItem: React.ForwardRefRenderFunction<HTMLDivElement, DropdownMenuItemProps> = (
  { className, style, children, isActive, onClick },
  ref
) => {
  return (
    <RadixDropdownMenu.Item asChild>
      <ActionListItem className={className} ref={ref} style={style} isActive={isActive} onClick={onClick}>
        {children}
      </ActionListItem>
    </RadixDropdownMenu.Item>
  );
};

DropdownMenuItem.displayName = 'DropdownMenuItem';

export default React.forwardRef(DropdownMenuItem);
