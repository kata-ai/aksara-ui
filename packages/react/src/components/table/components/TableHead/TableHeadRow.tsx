import * as React from 'react';
import { Box, BoxProps } from '../../../../layout';

export type TableHeadRowProps = React.TableHTMLAttributes<HTMLTableRowElement> & Omit<BoxProps, 'width' | 'height'>;

const TableHeadRow = React.forwardRef<HTMLTableRowElement, TableHeadRowProps>(
  ({ children, _hover, _notLast, ...rest }, ref) => {
    return (
      <Box as="tr" ref={ref} {...rest}>
        {children}
      </Box>
    );
  }
);

TableHeadRow.displayName = 'TableHeadRow';

export default TableHeadRow;
