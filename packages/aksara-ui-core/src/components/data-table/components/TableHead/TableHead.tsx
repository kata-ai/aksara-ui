import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { themeProps } from '../../../../Theme';

const TableHead = styled('thead')`
  background-color: ${themeGet('colors.grey04', themeProps.colors.grey04)};
`;

TableHead.displayName = 'TableHead';

export default TableHead;
