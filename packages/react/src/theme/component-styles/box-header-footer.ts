import type { ComponentThemeConfig } from '../../system';

const boxHeader: ComponentThemeConfig = {
  baseStyle: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    px: 'lg',
  },
  propToScaleMap: [['size', 'sizes']],
  scales: {
    sizes: {
      sm: {
        height: '56px',
      },
      lg: {
        height: '72px',
      },
    },
  },
};

const boxFooter: ComponentThemeConfig = {
  baseStyle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    px: 'lg',
  },
  propToScaleMap: [['size', 'sizes']],
  scales: {
    sizes: {
      sm: {
        height: '48px',
      },
      md: {
        height: '56px',
      },
      lg: {
        height: '88px',
      },
    },
  },
};

const boxHeaderFooter = {
  boxHeader,
  boxFooter,
};

export default boxHeaderFooter;
