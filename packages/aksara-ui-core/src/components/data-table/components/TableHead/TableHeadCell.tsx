import * as React from 'react';
import { Box, BoxProps, Text } from '../../../../foundations';
import { theme } from '../../../../theme';

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
        px="lg"
        py="sm"
        sx={{ boxShadow: `inset 0px 1px 0px ${theme.colors.grey03}, inset 0px -1px 0px ${theme.colors.grey03}` }}
        {...rest}
      >
        <Text scale={200} fontWeight={600}>
          {children}
        </Text>
      </Box>
    );
  }
);

TableHeadCell.displayName = 'TableHeadCell';

export default TableHeadCell;
