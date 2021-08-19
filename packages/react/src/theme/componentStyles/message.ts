import { ComponentThemeConfig } from '../types';

const messageBase: ComponentThemeConfig = {
  baseStyle: {
    display: 'flex',
    minHeight: 56,
    border: '1px solid',
    borderColor: 'transparent',
    borderRadius: 4,
    color: 'grey08',
    overflow: 'hidden',
  },
  propToScaleMap: [['variant', 'variants']],
  scales: {
    variants: {
      default: {
        backgroundColor: 'greylight02',
        borderColor: 'greylight04',
      },
      success: {
        backgroundColor: 'green01',
        borderColor: 'green07',
      },
      warning: {
        backgroundColor: 'yellow01',
        borderColor: 'yellow07',
      },
      critical: {
        backgroundColor: 'red01',
        borderColor: 'red07',
      },
      info: {
        backgroundColor: 'indigo01',
        borderColor: 'indigo05',
      },
    },
  },
};

const messageIcon: ComponentThemeConfig = {
  propToScaleMap: [['variant', 'variants']],
  scales: {
    variants: {
      default: {
        color: 'greymed04',
      },
      success: {
        color: 'green07',
      },
      warning: {
        color: 'yellow07',
      },
      critical: {
        color: 'red07',
      },
      info: {
        color: 'indigo05',
      },
    },
  },
};

const message = {
  messageBase,
  messageIcon,
};

export default message;
