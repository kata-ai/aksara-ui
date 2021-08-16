import { ComponentThemeConfig } from '../types';

const badge: ComponentThemeConfig = {
  baseStyle: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 200,
    fontWeight: 500,
    px: 'xs',
  },
  propToScaleMap: [
    ['size', 'sizes'],
    ['variant', 'variants'],
  ],
  scales: {
    sizes: {
      sm: {
        height: '16px',
        borderRadius: '16px',
      },
      md: {
        height: '24px',
        borderRadius: '24px',
      },
      lg: {
        height: '32px',
        borderRadius: '32px',
      },
    },
    variants: {
      default: {
        backgroundColor: 'greylight04',
        color: 'greymed04',
      },
      grey: {
        backgroundColor: 'greylight04',
        color: 'greymed04',
      },
      indigo: {
        backgroundColor: 'indigo01',
        color: 'indigo06',
      },
      yellow: {
        backgroundColor: 'yellow01',
        color: 'yellow08',
      },
      red: {
        backgroundColor: 'red01',
        color: 'red07',
      },
      green: {
        backgroundColor: 'green01',
        color: 'green07',
      },
      blue: {
        backgroundColor: 'blue01',
        color: 'blue07',
      },
    },
  },
};

export default badge;
