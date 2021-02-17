import { ComponentThemeConfig } from '../types';

const card: ComponentThemeConfig = {
  propToScaleMap: [['elevation', 'elevations']],
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
