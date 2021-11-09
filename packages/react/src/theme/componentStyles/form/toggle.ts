import { transparentize } from 'polished';
import type { DefaultTheme } from 'styled-components';
import type { ComponentThemeConfig } from '../../../system';

const inputToggleButton: ComponentThemeConfig = {
  baseStyle: ({ theme }: { theme: DefaultTheme }) => ({
    display: 'inline-flex',
    flexShrink: 0,
    alignItems: 'center',
    position: 'relative',
    width: 44,
    height: 24,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderRadius: 24,
    transition: 'all 0.3s ease',
    '&:not([disabled])': {
      backgroundColor: 'greymed04',
      '&[aria-checked="true"]': {
        backgroundColor: 'green07',
      },
      '&:focus': {
        boxShadow: `0 0 0 2px ${transparentize(0.3, theme.colors.blue03)}`,
      },
    },
    '&[disabled]': {
      backgroundColor: 'greylight05',
      cursor: 'not-allowed',
    },
  }),
};

const inputToggleCircle: ComponentThemeConfig = {
  baseStyle: {
    display: 'inline-block',
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: 'greylight01',
    pointerEvents: 'none',
    transition: 'all 0.3s ease',
  },
};

const formToggle = {
  inputToggleButton,
  inputToggleCircle,
};

export default formToggle;
