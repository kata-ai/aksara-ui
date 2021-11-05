import * as React from 'react';
import { Box, BoxProps } from '../../../../layout';
import { Paragraph } from '../../../../typography';

export interface TableBodyCellProps
  extends React.TdHTMLAttributes<HTMLTableCellElement>,
    Omit<BoxProps, 'width' | 'height'> {
  /** Allow styling of table cell element. This removes the base text styling. */
  textContent?: string;
}

const TableBodyCell = React.forwardRef<HTMLTableCellElement, TableBodyCellProps>(
  ({ className, style, children, textContent, ...rest }, ref) => {
    const renderContent = () => {
      if (textContent) {
        return <Paragraph scale={300}>{children}</Paragraph>;
      }

      return children;
    };

    return (
      <Box
        ref={ref}
        as="td"
        className={className}
        style={style}
        px="md"
        height="48px"
        fontSize="14px"
        lineHeight="20px"
        sx={{ boxShadow: `inset 0px -1px 0px #EFF2F5` }}
        {...rest}
      >
        {renderContent()}
      </Box>
    );
  }
);

TableBodyCell.displayName = 'TableBodyCell';

export default TableBodyCell;
