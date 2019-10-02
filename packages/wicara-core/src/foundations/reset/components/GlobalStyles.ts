import { createGlobalStyle } from 'styled-components';
import reboot from '../styles/reboot';
import base from '../styles/base';
import spacing from '../styles/spacing';

const GlobalStyles = createGlobalStyle`
${reboot}
${base}
${spacing}
`;

export default GlobalStyles;
