// tslint:disable:no-unused-expression

import { injectGlobal } from 'styled-components';
import reboot from './utils/reboot';
import globals from './utils/globals';
import fonts from './utils/fonts';

// TODO: Convert to pure CSS. We'll handle themable resets in `@kata-kit/theme`.
injectGlobal`
  :root {
    font-size: 13px;
    line-height: 20px;
  }

  ${reboot}
  ${globals}
  ${fonts}
`;
