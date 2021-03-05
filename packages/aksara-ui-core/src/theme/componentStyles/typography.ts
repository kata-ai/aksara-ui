import { DefaultTheme } from 'styled-components';
import { ComponentThemeConfig } from '../types';

/** Anchor size values mapped by scale token. */
export const anchor: ComponentThemeConfig = {
  baseStyle: ({ theme }: { theme: DefaultTheme }) => ({
    color: theme.colors.link,
    '&:hover': {
      color: theme.colors['link-hover'],
      textDecoration: 'underline',
    },
    '&:focus': {
      color: theme.colors['link-hover'],
      textDecoration: 'underline',
    },
  }),
};

const typography = {
  anchor,
};

export default typography;
