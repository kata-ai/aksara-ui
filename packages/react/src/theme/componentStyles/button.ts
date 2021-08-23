import { ComponentThemeConfig } from '../types';

const baseStyle = {
  margin: 0,
  padding: 0,
  textAlign: 'center',
  whiteSpace: 'nowrap',
  verticalAlign: 'middle',
  userSelect: 'none',
  background: 'none',
  textDecoration: 'none',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '16px',
  letterSpacing: '0.2px',
  border: '1px solid transparent',
  borderRadius: 8,
  '&:focus': {
    boxShadow: `0 0 0 2px rgba(175, 214, 255, 0.7)`,
  },
  '&:disabled': {
    cursor: 'not-allowed',
  },
};

const variants = {
  primary: {
    '&:not(:disabled)': {
      backgroundColor: 'blue07',
      color: 'greylight01',
      '&:hover': {
        backgroundColor: 'blue08',
      },
      '&:active': {
        backgroundColor: 'blue09',
      },
    },
    '&:disabled': {
      backgroundColor: 'greylight05',
      color: 'greylight01',
    },
  },
  secondary: {
    '&:not(:disabled)': {
      borderColor: 'greylight04',
      backgroundColor: 'greylight03',
      color: 'greydark02',
      '&:hover': {
        backgroundColor: 'greylight04',
      },
    },
    '&:disabled': {
      backgroundColor: 'greylight03',
      borderColor: 'greylight04',
      color: 'greymed01',
    },
  },
  destructive: {
    '&:not(:disabled)': {
      backgroundColor: 'red07',
      color: 'greylight01',
    },
    '&:disabled': {
      backgroundColor: 'greylight05',
      color: 'greylight01',
    },
  },
  'outline-destructive': {
    '&:not(:disabled)': {
      borderColor: 'red07',
      color: 'greylight01',
    },
    '&:disabled': {
      borderColor: 'greylight04',
      color: 'greymed01',
    },
  },
};

export const buttonBase: ComponentThemeConfig = {
  baseStyle,
  propToScaleMap: [
    ['size', 'sizes'],
    ['variant', 'variants'],
  ],
  scales: {
    sizes: {
      sm: {
        height: '24px',
        py: 'xxs',
        px: 'xs',
      },
      md: {
        height: '32px',
        py: 'xs',
        px: 'sm',
      },
      lg: {
        height: '40px',
        py: 'sm',
        px: 'md',
      },
    },
    variants,
  },
};

export const iconButton: ComponentThemeConfig = {
  baseStyle,
  propToScaleMap: [
    ['size', 'sizes'],
    ['variant', 'variants'],
  ],
  scales: {
    sizes: {
      sm: {
        width: '24px',
        height: '24px',
        '> svg': {
          width: '16px',
          height: '16px',
        },
      },
      md: {
        width: '32px',
        height: '32px',
        '> svg': {
          width: '16px',
          height: '16px',
        },
      },
      lg: {
        width: '40px',
        height: '40px',
        '> svg': {
          width: '20px',
          height: '20px',
        },
      },
    },
    variants,
  },
};

export const unstyledButton: ComponentThemeConfig = {
  baseStyle: {
    width: 'auto',
    margin: 0,
    padding: 0,
    border: 'none',
    font: 'inherit',
    color: 'inherit',
    backgroundColor: 'transparent',
    cursor: 'pointer',

    // Normalizes line height & removes center align
    lineHeight: 'normal',
    textAlign: 'inherit',

    // Corrects font smoothing for webkit
    '-webkit-font-smoothing': 'inherit',
    '-moz-osx-font-smoothing': 'inherit',

    // Corrects inability to style clickable \`input\` types in iOS
    '-webkit-appearance': 'none',

    // Remove excess padding and border in Firefox 4+
    '&::-moz-focus-inner': {
      border: 0,
      padding: 0,
    },
  },
};

const button = {
  buttonBase,
  iconButton,
  unstyledButton,
};

export default button;
