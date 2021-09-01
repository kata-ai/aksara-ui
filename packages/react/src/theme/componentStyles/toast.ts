import { transparentize } from 'polished';
import { DefaultTheme } from 'styled-components';
import { TOASTER_WIDTH } from '../../components/toast/internals/constants';
import { ComponentThemeConfig } from '../types';

const toastInner: ComponentThemeConfig = {
  baseStyle: {
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
    maxWidth: TOASTER_WIDTH,
    p: 'md',
    textAlign: 'left',
    border: '1px solid',
    borderColor: 'transparent',
    borderRadius: 8,
  },
  propToScaleMap: [['variant', 'variants']],
  scales: {
    variants: {
      default: {
        backgroundColor: 'greydark02',
        color: 'greylight01',
      },
      error: {
        backgroundColor: 'red07',
        color: 'greylight01',
      },
    },
  },
};

const toastCloseButton: ComponentThemeConfig = {
  baseStyle: ({ theme }: { theme: DefaultTheme }) => ({
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
    width: '24px',
    height: '24px',
    '> svg': {
      width: '16px',
      height: '16px',
    },
    '&:not(:disabled)': {
      color: 'greylight01',
      '&:hover': {
        backgroundColor: transparentize(0.9, theme.colors.greylight01),
      },
    },
  }),
};

const toast = {
  toastInner,
  toastCloseButton,
};

export default toast;
