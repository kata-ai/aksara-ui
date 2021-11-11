import * as React from 'react';
import { Box } from '../../../../layout';
import { Text } from '../../../../typography';

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
      <Text scale={200} fontWeight={600} lineHeight="16px" color="greymed01">
        {children}
      </Text>
    </Box>
  );
};

DropdownMenuHeader.displayName = 'DropdownMenuItem';

export default React.forwardRef(DropdownMenuHeader);
