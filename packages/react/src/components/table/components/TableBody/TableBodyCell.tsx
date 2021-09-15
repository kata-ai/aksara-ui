import * as React from 'react';
import { Box, BoxProps } from '../../../../layout';
import { Paragraph } from '../../../../typography';
import { theme } from '../../../../theme';

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
        px="lg"
        py="sm"
        fontSize="14px"
        lineHeight="24px"
        sx={{ boxShadow: `0px 0px 0px rgba(0, 0, 0, 0.25), inset 0px -1px 0px ${theme.colors.grey03}` }}
        {...rest}
      >
        {renderContent()}
      </Box>
    );
  }
);

TableBodyCell.displayName = 'TableBodyCell';

export default TableBodyCell;
