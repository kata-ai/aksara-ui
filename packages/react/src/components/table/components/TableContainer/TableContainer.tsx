import * as React from 'react';
import { Box, BoxProps } from '../../../../layout';

export type TableContainerProps = BoxProps & React.HTMLAttributes<HTMLDivElement>;

const TableContainer = React.forwardRef<HTMLDivElement, TableContainerProps>(({ children, ...rest }, ref) => {
  return (
    <Box ref={ref} overflowX="auto" {...rest}>
      {children}
    </Box>
  );
});

TableContainer.displayName = 'TableContainer';

export default TableContainer;
