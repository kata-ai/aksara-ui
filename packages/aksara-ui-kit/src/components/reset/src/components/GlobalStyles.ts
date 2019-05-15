import { createGlobalStyle } from 'styled-components';
import reboot from '../styles/reboot';
import base from '../styles/base';
import table from '../styles/table';
import spacing from '../styles/spacing';

const GlobalStyles = createGlobalStyle`
${reboot}
${base}
${table}
${spacing}
`;

export default GlobalStyles;
