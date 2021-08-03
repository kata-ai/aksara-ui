import { ComponentThemeConfig } from '../types';

export const unstyledButton: ComponentThemeConfig = {
  baseStyle: () => ({
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
  }),
};

const button = {
  unstyledButton,
};

export default button;
