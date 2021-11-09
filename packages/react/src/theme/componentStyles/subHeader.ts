import type { ComponentThemeConfig } from '../../system';

const subHeaderBase: ComponentThemeConfig = {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    px: 'lg',
    py: 'sm',
  },
  propToScaleMap: [['variant', 'variants']],
  scales: {
    variants: {
      stick: {
        borderBottom: '1px solid',
        borderColor: 'greylight04',
      },
      stand: {
        border: '1px solid',
        borderColor: 'greylight04',
        borderRadius: '8px',
      },
    },
  },
};

const subHeader = {
  subHeaderBase,
};

export default subHeader;
