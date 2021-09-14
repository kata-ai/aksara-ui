import { ComponentThemeConfig } from '../types';

export const heading: ComponentThemeConfig = {
  propToScaleMap: [['scale', 'scales']],
  scales: {
    scales: {
      900: {
        fontSize: 900,
        lineHeight: 900,
        fontWeight: 700,
        letterSpacing: '-0.2px',
      },
      800: {
        fontSize: 800,
        lineHeight: 800,
        fontWeight: 700,
        letterSpacing: '-0.2px',
      },
      700: {
        fontSize: 700,
        lineHeight: 700,
        fontWeight: 700,
        letterSpacing: '-0.2px',
      },
      600: {
        fontSize: 600,
        lineHeight: 600,
        fontWeight: 700,
        letterSpacing: '-0.2px',
      },
      500: {
        fontSize: 500,
        lineHeight: 500,
        fontWeight: 700,
        letterSpacing: '-0.02px',
      },
      400: {
        fontSize: 400,
        lineHeight: 400,
        fontWeight: 700,
        letterSpacing: '-0.05px',
      },
      300: {
        fontSize: 300,
        lineHeight: 300,
        fontWeight: 700,
        letterSpacing: '-0.05px',
      },
      200: {
        fontSize: 200,
        lineHeight: 200,
        fontWeight: 600,
      },
      100: {
        fontSize: 100,
        lineHeight: 100,
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
      },
    },
  },
};

export const text: ComponentThemeConfig = {
  propToScaleMap: [['scale', 'scales']],
  scales: {
    scales: {
      500: {
        fontSize: '20px',
        lineHeight: '28px',
      },
      400: {
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '-0.05px',
      },
      300: {
        fontSize: '14px',
        lineHeight: '20px',
        letterSpacing: '-0.05px',
      },
      200: {
        fontSize: '12px',
        lineHeight: '18px',
      },
    },
  },
};

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
  heading,
  text,
  anchor,
  unstyledAnchor,
};

export default typography;
