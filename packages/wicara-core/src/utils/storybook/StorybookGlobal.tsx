import { createGlobalStyle } from 'styled-components';
import { colors } from '../variables';

const StorybookGlobal = createGlobalStyle`
  body {
    background-color: ${colors.white};
  }
`;

export default StorybookGlobal;
