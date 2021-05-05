import * as React from 'react';
import { Box, BoxProps } from '../../../../layout';

export type TableBodyProps = React.TableHTMLAttributes<HTMLTableSectionElement> & Omit<BoxProps, 'width' | 'height'>;

const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(({ children, ...rest }, ref) => {
  return (
    <Box as="tbody" ref={ref} {...rest}>
      {children}
    </Box>
  );
});

TableBody.displayName = 'TableBody';

export default TableBody;
