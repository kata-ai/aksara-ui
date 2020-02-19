import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { space, colors } from '../../../../utils';

const DropdownMenuDivider = styled('hr')`
  margin: ${themeGet('space.xs', space.xs)}px 0;
  border: none;
  border-top: 1px solid ${themeGet('colors.grey04', colors.grey04)};
`;

DropdownMenuDivider.displayName = 'DropdownMenuDivider';

export default DropdownMenuDivider;
