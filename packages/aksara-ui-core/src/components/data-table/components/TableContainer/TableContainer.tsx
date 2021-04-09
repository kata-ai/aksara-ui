import * as React from 'react';
import { Box, BoxProps } from '../../../../foundations';

export type TableContainerProps = BoxProps;

const TableContainer = React.forwardRef<HTMLDivElement, BoxProps>(({ children, ...rest }, ref) => {
  return (
    <Box ref={ref} overflowX="auto" {...rest}>
      {children}
    </Box>
  );
});

TableContainer.displayName = 'TableContainer';

export default TableContainer;
