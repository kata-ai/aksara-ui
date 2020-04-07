import * as React from 'react';
import styled from 'styled-components';
import { Text } from '../../../../foundations';
import { BaseStylesProps, BaseStyles } from '../../styles';

export type TableHeaderCellProps = React.ThHTMLAttributes<HTMLTableHeaderCellElement>;

const TableBodyRoot = styled('td')<BaseStylesProps>`
  ${BaseStyles}
`;

const TableBodyText = styled(Text)``;

const TableBodyCell: React.FC<TableHeaderCellProps> = ({ className, style, children, ...rest }) => {
  return (
    <TableBodyRoot className={className} style={style} px="md" py="md" {...rest}>
      <TableBodyText scale={300}>{children}</TableBodyText>
    </TableBodyRoot>
  );
};

TableBodyCell.displayName = 'TableBodyCell';

export default TableBodyCell;
