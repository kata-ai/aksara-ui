import * as React from 'react';
import styled from 'styled-components';
import { Text } from '../../../../foundations';
import { BaseStylesProps, BaseStyles } from '../../styles';

export interface TableBodyCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  /** Allow styling of table cell element. This removes the base text styling. */
  customContent?: boolean;
}

const TableBodyRoot = styled('td')<BaseStylesProps>`
  ${BaseStyles}
`;

const TableBodyText = styled(Text)``;

const TableBodyCell: React.FC<TableBodyCellProps> = ({ className, style, children, customContent, ...rest }) => {
  const renderContent = () => {
    if (customContent) {
      return children;
    }

    return (
      <TableBodyText scale={200} fontWeight={600}>
        {children}
      </TableBodyText>
    );
  };

  return (
    <TableBodyRoot className={className} style={style} px="md" py="md" {...rest}>
      {renderContent()}
    </TableBodyRoot>
  );
};

TableBodyCell.displayName = 'TableBodyCell';

export default TableBodyCell;
