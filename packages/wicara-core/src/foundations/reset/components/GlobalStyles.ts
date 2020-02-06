import { createGlobalStyle } from 'styled-components';
import normalize from '../styles/normalize';
import base from '../styles/base';
import spacing from '../styles/spacing';

const GlobalStyles = createGlobalStyle`
${normalize}
${base}
${spacing}
`;

export default GlobalStyles;
