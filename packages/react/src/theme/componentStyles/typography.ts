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
    color: 'inherit',
    textDecoration: 'none',
    fontWeight: 'inherit',
    '&:hover, &:focus, &:active': {
      color: 'inherit',
      textDecoration: 'none',
      fontWeight: 'inherit',
    },
  },
};

const typography = {
  anchor,
  unstyledAnchor,
};

export default typography;
