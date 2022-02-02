import type { ComponentThemeConfig } from '../../system';

const badge: ComponentThemeConfig = {
  baseStyle: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 500,
  },
  propToScaleMap: [
    ['size', 'sizes'],
    ['variant', 'variants'],
  ],
  scales: {
    sizes: {
      sm: {
        fontSize: '12px',
        lineHeight: '20px',
        fontWeight: 500,
        height: '16px',
        borderRadius: '16px',
        px: 'xxs',
      },
      md: {
        fontSize: '12px',
        lineHeight: '20px',
        fontWeight: 500,
        height: '24px',
        borderRadius: '24px',
        px: 'xs',
      },
    },
    variants: {
      default: {
        backgroundColor: 'greylight04',
        color: 'greymed04',
      },
      info: {
        backgroundColor: 'indigo01',
        color: 'indigo06',
      },
      warning: {
        backgroundColor: 'yellow01',
        color: 'yellow09',
      },
      critical: {
        backgroundColor: 'red01',
        color: 'red07',
      },
      success: {
        backgroundColor: 'green01',
        color: 'green07',
      },
      active: {
        backgroundColor: 'blue02',
        color: 'blue07',
      },
    },
  },
};

export default badge;
