import { DefaultTheme } from 'styled-components';
import { ComponentThemeConfig } from '../types';

/** Anchor size values mapped by scale token. */
export const anchor: ComponentThemeConfig = {
  baseStyle: ({ theme }: { theme: DefaultTheme }) => ({
    color: theme.colors.blue07,
    '&:hover': {
      color: theme.colors.blue08,
      textDecoration: 'underline',
    },
    '&:focus, &:active': {
      color: theme.colors.blue09,
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
