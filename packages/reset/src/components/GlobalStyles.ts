import { createGlobalStyle } from 'styled-components';
import reboot from '../styles/reboot';
import typography from '../styles/typography';
import base from '../styles/base';

const GlobalStyles = createGlobalStyle`
${reboot}
${base}
${typography}
`;

export default GlobalStyles;
