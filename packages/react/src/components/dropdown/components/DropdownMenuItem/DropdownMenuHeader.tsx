import * as React from 'react';
import { Box } from '../../../../layout';
import { Heading } from '../../../../typography';

export interface DropdownMenuHeaderProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const DropdownMenuHeader: React.ForwardRefRenderFunction<HTMLDivElement, DropdownMenuHeaderProps> = (
  { className, style, children },
  ref
) => {
  return (
    <Box ref={ref} py="xs" px="md" backgroundColor="grey01" className={className} style={style}>
      <Heading scale={200} fontWeight={600} lineHeight="16px" fontSize={12} color="greydark02">
        {children}
      </Heading>
    </Box>
  );
};

DropdownMenuHeader.displayName = 'DropdownMenuItem';

export default React.forwardRef(DropdownMenuHeader);
