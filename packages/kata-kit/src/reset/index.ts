// @ts-ignore
import { createGlobalStyle } from 'styled-components';

import fonts from './src/fonts';
import globals from './src/globals';
import tables from './src/tables';
import reboot from './src/reboot';
import spacings from './src/spacings';
import kataFonts from './src/kata-fonts';

export const Reset = createGlobalStyle`
  ${reboot}
  ${globals}
  ${spacings}
  ${fonts}
  ${tables}
  ${kataFonts}
`;
