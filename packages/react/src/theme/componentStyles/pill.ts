import { ComponentThemeConfig } from '../types';

const pillRoot: ComponentThemeConfig = {
  baseStyle: {
    display: 'inline-flex',
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center',
    px: 4,
    py: 2,
    fontWeight: 400,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderRadius: 9999,
    '&:not([disabled])': {
      cursor: 'pointer',
    },
    '&[disabled]': {
      backgroundColor: 'greylight05',
      color: 'greylight01',
    },
  },
  propToScaleMap: [['variant', 'variants']],
  scales: {
    variants: {
      default: {
        '&:not([disabled])': {
          backgroundColor: 'greylight04',
          color: 'greymed04',
        },
      },
      info: {
        '&:not([disabled])': {
          backgroundColor: 'indigo01',
          color: 'indigo06',
        },
      },
      critical: {
        '&:not([disabled])': {
          backgroundColor: 'red01',
          color: 'red07',
        },
      },
      success: {
        '&:not([disabled])': {
          backgroundColor: 'green01',
          color: 'green07',
        },
      },
      active: {
        '&:not([disabled])': {
          backgroundColor: 'blue01',
          color: 'blue07',
        },
      },
    },
  },
};

const pill = {
  pillRoot,
};

export default pill;
