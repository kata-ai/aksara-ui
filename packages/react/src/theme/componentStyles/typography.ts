import { ComponentThemeConfig } from '../types';

/** Anchor size values mapped by scale token. */
export const anchor: ComponentThemeConfig = {
  baseStyle: {
    color: 'blue07',
    '&:hover': {
      color: 'blue08',
      textDecoration: 'underline',
    },
    '&:focus, &:active': {
      color: 'blue09',
      textDecoration: 'underline',
    },
  },
};

export const unstyledAnchor: ComponentThemeConfig = {
  baseStyle: {
    fontStyle: 'inherit',
    color: 'inherit',
    backgroundColor: 'transparent',
    textDecoration: 'none',
    outline: 'inherit',
    boxShadow: 'inherit',
    '&:hover, &:focus, &:active': {
      fontStyle: 'inherit',
      color: 'inherit',
      backgroundColor: 'transparent',
      textDecoration: 'none',
      outline: 'inherit',
      boxShadow: 'inherit',
    },
  },
};

const typography = {
  anchor,
  unstyledAnchor,
};

export default typography;
