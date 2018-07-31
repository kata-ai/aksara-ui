// tslint:disable:no-unused-expression

import { injectGlobal } from 'styled-components';
import reboot from './utils/reboot';
import globals from './utils/globals';
import fonts from './utils/fonts';

injectGlobal`
  ${reboot}
  ${globals}
  ${fonts}
`;
