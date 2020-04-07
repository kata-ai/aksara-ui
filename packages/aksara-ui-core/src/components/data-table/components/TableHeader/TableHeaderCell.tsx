import * as React from 'react';
import styled from 'styled-components';
import { Text } from '../../../../foundations';
import { BaseStylesProps, BaseStyles } from '../../styles';

export type TableHeaderCellProps = React.ThHTMLAttributes<HTMLTableHeaderCellElement>;

const TableHeaderRoot = styled('th')<BaseStylesProps>`
  text-align: left;

  ${BaseStyles}
`;

const TableHeaderText = styled(Text)`
  text-transform: uppercase;
`;

const TableHeaderCell: React.FC<TableHeaderCellProps> = ({ className, style, children, ...rest }) => {
  return (
    <TableHeaderRoot className={className} style={style} px="md" py="xs" {...rest}>
      <TableHeaderText scale={200}>{children}</TableHeaderText>
    </TableHeaderRoot>
  );
};

TableHeaderCell.displayName = 'TableHeaderCell';

export default TableHeaderCell;
