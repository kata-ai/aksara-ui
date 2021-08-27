import { ComponentThemeConfig } from '../types';

const toastBase: ComponentThemeConfig = {
  baseStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    maxWidth: 366,
    p: 'md',
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

const toast = {
  toastBase,
};

export default toast;
