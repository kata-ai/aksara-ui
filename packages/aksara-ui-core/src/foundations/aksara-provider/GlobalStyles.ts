import { createGlobalStyle } from 'styled-components';
import normalize from './styles/normalize';
import base from './styles/base';

const GlobalStyles = createGlobalStyle`
${normalize}
${base}
`;

export default GlobalStyles;
