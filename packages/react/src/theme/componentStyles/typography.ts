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

export const unstyledAnchor: ComponentThemeConfig = {
  baseStyle: () => ({
    fontStyle: 'inherit',
    color: 'inherit',
    backgroundColor: 'transparent',
    fontSize: 'inherit',
    textDecoration: 'none',
    fontVariant: 'inherit',
    fontWeight: 'inherit',
    lineHeight: 'inherit',
    fontFamily: 'inherit',
    borderRadius: 'inherit',
    border: 'inherit',
    outline: 'inherit',
    boxShadow: 'inherit',
    '&:hover, &:focus, &:active': {
      fontStyle: 'inherit',
      color: 'inherit',
      backgroundColor: 'transparent',
      fontSize: 'inherit',
      textDecoration: 'none',
      fontVariant: 'inherit',
      fontWeight: 'inherit',
      lineHeight: 'inherit',
      fontFamily: 'inherit',
      borderRadius: 'inherit',
      border: 'inherit',
      outline: 'inherit',
      boxShadow: 'inherit',
    },
  }),
};

const typography = {
  anchor,
  unstyledAnchor,
};

export default typography;
