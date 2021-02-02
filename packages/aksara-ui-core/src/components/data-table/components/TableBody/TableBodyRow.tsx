import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { theme } from '../../../../theme';

const TableBodyRow = styled('tr')`
  &:hover {
    background-color: ${themeGet('colors.grey02', theme.colors.grey02)};
  }

  :not(:last-of-type) {
    > td {
      border-bottom: 1px solid ${themeGet('colors.grey03', theme.colors.grey03)};
    }
  }
`;

TableBodyRow.displayName = 'TableBodyRow';

export default TableBodyRow;
