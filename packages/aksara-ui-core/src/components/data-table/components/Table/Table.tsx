import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { themeProps } from '../../../../Theme';

const Table = styled('table')`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid ${themeGet('colors.grey04', themeProps.colors.grey04)};
  border-radius: 4px;
  overflow: hidden;
`;

Table.displayName = 'Table';

export default Table;
