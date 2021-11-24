import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { theme } from '../../../../theme';

const DropdownMenuDivider = styled('hr')`
  border: none;
  border-top: 1px solid ${themeGet('colors.greylight04', theme.colors.greylight04)};
`;

export default DropdownMenuDivider;
