import * as React from 'react';
import { Box, BoxProps } from '../../../../layout';

export type TableProps = React.TableHTMLAttributes<HTMLTableElement> & Omit<BoxProps, 'width' | 'height'>;

const Table = React.forwardRef<HTMLTableElement, TableProps>(({ children, sx, ...rest }, ref) => {
  return (
    <Box ref={ref} as="table" width="100%" sx={{ borderCollapse: 'collapse', ...sx }} {...rest}>
      {children}
    </Box>
  );
});

Table.displayName = 'Table';

export default Table;
