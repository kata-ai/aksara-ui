import * as React from 'react';
import { Base, Arrow, MenuCard } from './styles';

export interface DropdownMenuProps {
  className?: string;
  tipOffset?: number;
  width?: number;
}

const MenuArrow: React.FC<Pick<DropdownMenuProps, 'tipOffset'>> = ({ tipOffset }) => {
  return (
    <Arrow style={{ left: tipOffset, textAlign: 'left' }}>
      <svg width="24" height="12" viewBox="0 0 24 12">
        <path fill="#fff" fillRule="evenodd" d="M20 12l-8-8-12 12" />
      </svg>
    </Arrow>
  );
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({ tipOffset, width, children }) => {
  return (
    <Base>
      {tipOffset && <MenuArrow tipOffset={tipOffset} />}
      <MenuCard elevation={3} width={width} borderRadius="xs" py="xs">
        {children}
      </MenuCard>
    </Base>
  );
};

DropdownMenu.displayName = 'DropdownMenu';

export default DropdownMenu;
