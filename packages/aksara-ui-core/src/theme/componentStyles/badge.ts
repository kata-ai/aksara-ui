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
        backgroundColor: 'grey03',
        color: 'grey08',
      },
      neutral: {
        backgroundColor: 'grey03',
        color: 'grey07',
      },
      info: {
        backgroundColor: 'indigo01',
        color: 'indigo04',
      },
      warning: {
        backgroundColor: 'yellow01',
        color: 'yellow07',
      },
      critical: {
        backgroundColor: 'red01',
        color: 'red06',
      },
      success: {
        backgroundColor: 'green01',
        color: 'green07',
      },
    },
  },
};

export default badge;
