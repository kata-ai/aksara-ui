import * as React from 'react';
import { Box, BoxProps, Card } from '../../../../foundations';
import { Arrow } from './styles';

export interface DropdownMenuProps extends BoxProps {
  className?: string;
  tipOffset?: number;
  width?: number;
  children?: React.ReactNode;
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

const DropdownMenu: React.ForwardRefRenderFunction<HTMLDivElement, DropdownMenuProps> = (
  { tipOffset, width, children, ...rest },
  ref
) => {
  return (
    <Box ref={ref} display="inline-block" position="relative" {...rest}>
      {tipOffset && <MenuArrow tipOffset={tipOffset} />}
      <Card
        elevation={3}
        display="inline-block"
        textAlign="left"
        width={width}
        maxWidth="100vw"
        marginTop={11}
        borderRadius="xs"
        py="xs"
      >
        {children}
      </Card>
    </Box>
  );
};

DropdownMenu.displayName = 'DropdownMenu';

export default React.forwardRef(DropdownMenu);
