// tslint:disable:no-unused-expression

import { injectGlobal } from 'styled-components';
import normalize from './utils/normalize';
import reboot from './utils/reboot';
import globals from './utils/globals';
import fonts from './utils/fonts';

injectGlobal`
  ${normalize}
  ${reboot}
  ${globals}
  ${fonts}
`;
