import { DefaultTheme } from 'styled-components';
import { ComponentThemeConfig } from '../types';

/** Heading size values mapped by size number. */
export const heading: ComponentThemeConfig = {
  propToScaleMap: [['scale', 'typeScales']],
  scales: {
    typeScales: {
      900: {
        fontSize: 900,
        lineHeight: 900,
        fontWeight: 500,
        letterSpacing: '-0.2px',
      },
      800: {
        fontSize: 800,
        lineHeight: 800,
        fontWeight: 500,
        letterSpacing: '-0.2px',
      },
      700: {
        fontSize: 700,
        lineHeight: 700,
        fontWeight: 500,
        letterSpacing: '-0.2px',
      },
      600: {
        fontSize: 600,
        lineHeight: 600,
        fontWeight: 500,
        letterSpacing: '-0.05px',
      },
      500: {
        fontSize: 500,
        lineHeight: 500,
        fontWeight: 500,
        letterSpacing: '-0.05px',
      },
      400: {
        fontSize: 400,
        lineHeight: 400,
        fontWeight: 600,
        letterSpacing: '-0.05px',
      },
      300: {
        fontSize: 300,
        lineHeight: 300,
        fontWeight: 600,
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

/** Text size values mapped by scale token. */
export const text: ComponentThemeConfig = {
  propToScaleMap: [['scale', 'typeScales']],
  scales: {
    typeScales: {
      900: {
        fontSize: 900,
        lineHeight: 900,
      },
      800: {
        fontSize: 800,
        lineHeight: 800,
      },
      700: {
        fontSize: 700,
        lineHeight: 700,
      },
      600: {
        fontSize: 600,
        lineHeight: 600,
      },
      500: {
        fontSize: 500,
        lineHeight: 500,
      },
      400: {
        fontSize: 400,
        lineHeight: 400,
      },
      300: {
        fontSize: 300,
        lineHeight: 300,
      },
      200: {
        fontSize: 200,
        lineHeight: 200,
      },
      100: {
        fontSize: 100,
        lineHeight: 100,
      },
    },
  },
};

/** Paragraph size values mapped by scale token. */
export const paragraph: ComponentThemeConfig = {
  propToScaleMap: [['scale', 'typeScales']],
  scales: {
    typeScales: {
      500: {
        fontSize: 500,
        lineHeight: '28px',
      },
      400: {
        fontSize: 400,
        lineHeight: '24px',
      },
      300: {
        fontSize: 300,
        lineHeight: '24px',
      },
      200: {
        fontSize: 200,
        lineHeight: '20px',
      },
    },
  },
};

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
  propToScaleMap: [['scale', 'typeScales']],
  scales: text.scales,
};
