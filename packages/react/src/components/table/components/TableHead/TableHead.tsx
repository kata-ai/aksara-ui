import * as React from 'react';
import { Box, BoxProps } from '../../../../layout';

export type TableHeadProps = React.TableHTMLAttributes<HTMLTableSectionElement> & Omit<BoxProps, 'width' | 'height'>;

const TableHead = React.forwardRef<HTMLTableSectionElement, TableHeadProps>(({ children, ...rest }, ref) => {
  return (
    <Box as="thead" ref={ref} {...rest}>
      {children}
    </Box>
  );
});

TableHead.displayName = 'TableHead';

export default TableHead;
