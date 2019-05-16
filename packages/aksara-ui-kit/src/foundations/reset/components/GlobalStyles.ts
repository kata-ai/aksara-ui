import { createGlobalStyle } from 'styled-components';
import reboot from '../styles/reboot';
import base from '../styles/base';

const GlobalStyles = createGlobalStyle`
${reboot}
${base}
`;

export default GlobalStyles;
