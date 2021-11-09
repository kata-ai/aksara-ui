import type { ComponentThemeConfig } from '../../system';

const card: ComponentThemeConfig = {
  propToScaleMap: [['elevation', 'elevations']],
  baseStyle: {
    borderRadius: 12,
    backgroundColor: 'greylight01',
    border: '1px solid',
    borderColor: 'greylight04',
    overflow: 'hidden',
  },
  scales: {
    elevations: {
      1: {
        boxShadow: 1,
      },
      2: {
        boxShadow: 2,
      },
      3: {
        boxShadow: 3,
      },
      4: {
        boxShadow: 4,
      },
      5: {
        boxShadow: 5,
      },
    },
  },
};

export default card;
