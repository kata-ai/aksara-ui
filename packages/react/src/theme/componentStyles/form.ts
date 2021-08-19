import { ComponentThemeConfig } from '../types';

const inputMessage: ComponentThemeConfig = {
  propToScaleMap: [['variant', 'variants']],
  scales: {
    variants: {
      default: {
        color: 'greymed05',
      },
      success: {
        color: 'green08',
      },
      warning: {
        color: 'yellow08',
      },
      critical: {
        color: 'red07',
      },
      info: {
        color: 'indigo06',
      },
    },
  },
};

const form = {
  inputMessage,
};

export default form;
