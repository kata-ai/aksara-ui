import { createGlobalStyle } from 'styled-components';
import reboot from '../styles/reboot';
import typography from '../styles/typography';
import base from '../styles/base';
import table from '../styles/table';
import spacing from '../styles/spacing';

const GlobalStyles = createGlobalStyle`
${reboot}
${base}
${typography}
${table}
${spacing}
`;

export default GlobalStyles;
