import * as React from 'react';
import { Box, BoxProps } from '../../../../foundations';

export interface TableBodyRowProps
  extends React.TableHTMLAttributes<HTMLTableRowElement>,
    Omit<BoxProps, 'width' | 'height'> {
  selected?: boolean;
}

const TableBodyRow = React.forwardRef<HTMLTableRowElement, TableBodyRowProps>(
  ({ children, _hover, _notLast, selected, ...rest }, ref) => {
    return (
      <Box
        as="tr"
        ref={ref}
        _hover={{ backgroundColor: selected ? 'turquoise02' : 'grey03' }}
        _active={{ backgroundColor: 'turquoise02', outline: '2px solid rgba(0, 111, 230, 0.4)' }}
        outline={selected ? '2px solid rgba(0, 111, 230, 0.4)' : 'none'}
        {...rest}
      >
        {children}
      </Box>
    );
  }
);

TableBodyRow.displayName = 'TableBody';

export default TableBodyRow;
