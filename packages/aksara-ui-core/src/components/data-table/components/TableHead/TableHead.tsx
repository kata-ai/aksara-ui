import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { theme } from '../../../../theme';

const TableHead = styled('thead')`
  background-color: ${themeGet('colors.grey04', theme.colors.grey04)};
`;

TableHead.displayName = 'TableHead';

export default TableHead;
