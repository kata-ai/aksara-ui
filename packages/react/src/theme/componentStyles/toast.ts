import { TOASTER_WIDTH } from '../../components/toast/internals/constants';
import type { ComponentThemeConfig } from '../../system';

const toastInner: ComponentThemeConfig = {
  baseStyle: {
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
    maxWidth: TOASTER_WIDTH,
    p: 'md',
    textAlign: 'left',
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
  baseStyle: () => ({
    margin: 0,
    padding: 0,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    userSelect: 'none',
    background: 'none',
    textDecoration: 'none',
    border: '1px solid transparent',
    borderRadius: 8,
    '&:disabled': {
      cursor: 'not-allowed',
    },
    width: '18px',
    height: '18px',
    '> svg': {
      width: '16px',
      height: '16px',
    },
    '&:not(:disabled)': {
      color: 'greylight01',
    },
  }),
};

const toast = {
  toastInner,
  toastCloseButton,
};

export default toast;
