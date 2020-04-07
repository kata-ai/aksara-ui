import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { themeProps } from '../../../../Theme';

const TableBodyRow = styled('tr')`
  &:hover {
    background-color: ${themeGet('colors.grey02', themeProps.colors.grey02)};
  }

  > td {
    border-bottom: 1px solid ${themeGet('colors.grey03', themeProps.colors.grey03)};
  }
`;

TableBodyRow.displayName = 'TableBodyRow';

export default TableBodyRow;
