import * as React from 'react';
import styled from 'styled-components';
import { Box } from '../../../../layout';
import { Text } from '../../../../typography';

export interface DropdownMenuHeaderProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Header = styled(Text)`
  text-transform: uppercase;
`;

const DropdownMenuHeader: React.ForwardRefRenderFunction<HTMLDivElement, DropdownMenuHeaderProps> = (
  { className, style, children },
  ref
) => {
  return (
    <Box ref={ref} py="xs" px="md" backgroundColor="grey01" className={className} style={style}>
      <Header scale={200} fontWeight={700} color="grey07">
        {children}
      </Header>
    </Box>
  );
};

DropdownMenuHeader.displayName = 'DropdownMenuItem';

export default React.forwardRef(DropdownMenuHeader);
