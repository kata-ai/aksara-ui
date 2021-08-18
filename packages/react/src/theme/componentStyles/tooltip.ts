import { ComponentThemeConfig } from '../types';

const tooltipInner: ComponentThemeConfig = {
  baseStyle: {
    maxWidth: 200,
    textAlign: 'left',
    verticalAlign: 'middle',
    borderRadius: '4px',
    color: 'greylight01',
    backgroundColor: 'greydark02',
  },
  propToScaleMap: [['size', 'sizes']],
  scales: {
    sizes: {
      sm: {
        py: 'xxs',
        px: 'md',
      },
      md: {
        p: 'md',
      },
      lg: {
        p: 'md',
      },
    },
  },
};

const tooltip = {
  tooltipInner,
};

export default tooltip;
