import * as React from 'react';
import { Box, BoxProps } from '../../../../layout';

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
        backgroundColor={selected ? 'blue01' : 'greylight01'}
        _hover={{ backgroundColor: selected ? 'blue01' : 'greylight03' }}
        _focus={{ backgroundColor: 'blue01', outline: '2px solid rgba(0, 111, 230, 0.4)' }}
        _active={{ backgroundColor: 'blue01', outline: '2px solid rgba(0, 111, 230, 0.4)' }}
        {...rest}
      >
        {children}
      </Box>
    );
  }
);

TableBodyRow.displayName = 'TableBodyRow';

export default TableBodyRow;
