import * as React from 'react';
import styled from 'styled-components';
import { Text } from '../../../../foundations';
import { BaseStylesProps, BaseStyles } from '../../styles';

export type TableBodyCellProps = React.ThHTMLAttributes<HTMLTableHeaderCellElement>;

const TableBodyRoot = styled('td')<BaseStylesProps>`
  ${BaseStyles}
`;

const TableBodyText = styled(Text)``;

const TableBodyCell: React.FC<TableBodyCellProps> = ({ className, style, children, ...rest }) => {
  return (
    <TableBodyRoot className={className} style={style} px="md" py="md" {...rest}>
      <TableBodyText scale={200} fontWeight={600}>
        {children}
      </TableBodyText>
    </TableBodyRoot>
  );
};

TableBodyCell.displayName = 'TableBodyCell';

export default TableBodyCell;
