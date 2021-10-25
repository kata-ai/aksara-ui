import * as React from 'react';
import { Box, BoxProps } from '../../../../layout';
import { Text } from '../../../../typography';

export type TableHeadCellProps = React.ThHTMLAttributes<HTMLTableHeaderCellElement> &
  Omit<BoxProps, 'width' | 'height'>;

const TableHeadCell = React.forwardRef<HTMLTableHeaderCellElement, TableHeadCellProps>(
  ({ className, style, children, ...rest }, ref) => {
    return (
      <Box
        ref={ref}
        as="th"
        className={className}
        style={style}
        textAlign="left"
        px="md"
        py="sm"
        fontSize="12px"
        lineHeight="16px"
        sx={{ boxShadow: `inset 0px 1px 0px #E5EAEF, inset 0px -1px 0px #EFF2F5;` }}
        {...rest}
      >
        <Text fontSize="12px" lineHeight="16px" fontWeight={700} color="greydark02">
          {children}
        </Text>
      </Box>
    );
  }
);

TableHeadCell.displayName = 'TableHeadCell';

export default TableHeadCell;
