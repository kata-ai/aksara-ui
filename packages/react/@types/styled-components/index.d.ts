/* eslint-disable @typescript-eslint/no-empty-interface */
import { theme } from '../../src/theme';
import 'styled-components';

type ThemeInterface = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeInterface {}
}
