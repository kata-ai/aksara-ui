import * as React from 'react';
import { Box, BoxProps } from '../../../../layout';

export interface DropdownMenuProps extends BoxProps {
  className?: string;
  tipOffset?: number;
  width?: number;
  children?: React.ReactNode;
}

const MenuArrow: React.FC<Pick<DropdownMenuProps, 'tipOffset'>> = ({ tipOffset }) => {
  return (
    <Box
      sx={{
        display: 'block',
        lineHeight: '11px',
        zIndex: 1,
        textAlign: 'center',
        position: 'absolute',
        top: '-1px',
      }}
      style={{ left: tipOffset, textAlign: 'left' }}
    >
      <svg width="24" height="12" viewBox="0 0 24 12">
        <path fill="#fff" fillRule="evenodd" d="M20 12l-8-8-12 12" />
      </svg>
    </Box>
  );
};

const DropdownMenu: React.ForwardRefRenderFunction<HTMLDivElement, DropdownMenuProps> = (
  { tipOffset, width, children, ...rest },
  ref
) => {
  return (
    <Box ref={ref} display="inline-block" position="relative" {...rest}>
      {tipOffset && <MenuArrow tipOffset={tipOffset} />}
      <Box
        display="inline-block"
        textAlign="left"
        width={width}
        maxWidth="100vw"
        marginTop={11}
        borderRadius="xs"
        overflow="hidden"
        boxShadow={3}
        py="xs"
      >
        {children}
      </Box>
    </Box>
  );
};

DropdownMenu.displayName = 'DropdownMenu';

export default React.forwardRef(DropdownMenu);
