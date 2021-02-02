import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { theme } from '../../../../theme';

const Table = styled('table')`
  width: 100%;
  border-spacing: 0;
  border: 1px solid ${themeGet('colors.grey04', theme.colors.grey04)};
  border-radius: 4px;
  overflow: hidden;
`;

Table.displayName = 'Table';

export default Table;
