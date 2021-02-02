import { createGlobalStyle } from 'styled-components';
import { theme } from '../../theme';

const StorybookGlobal = createGlobalStyle`
  body {
    background-color: ${theme.colors.white};
  }
`;

export default StorybookGlobal;
