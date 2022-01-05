import type { ComponentThemeConfig } from '../../system';

const dateNumberBox: ComponentThemeConfig = {
  baseStyle: {
    width: '32px',
    height: '32px',
    display: 'inline-flex',
    alignItem: 'center',
    backgroundColor: 'greylight01',
  },
  propToScaleMap: [['variant', 'variants']],
  scales: {
    variants: {
      default: {},
      currentDate: {},
      selected: {},
      start: {
        backgroundColor: 'blue01',
        borderRadius: '32px 0px 0px 32px',
      },
      end: {
        backgroundColor: 'blue01',
        borderRadius: '0px 32px 32px 0px',
      },

      road: {},
    },
  },
};

const dateNumber: ComponentThemeConfig = {
  baseStyle: {
    width: '32px',
    height: '32px',
    fontSize: 200,
    color: 'greydark-02',
  },
  propToScaleMap: [['variant', 'variants']],
  scales: {
    variants: {
      default: {
        '&:hover': {
          backgroundColor: 'greylight03',
          borderRadius: '32px',
        },
      },
      currentDate: {
        backgroundColor: 'blue01',
        border: '1px solid rgba(175, 214, 255, 0.7)',
        borderRadius: '32px',
        color: 'blue07',
        fontSize: 200,
      },
      selected: {
        backgroundColor: 'blue07',
        borderRadius: '32px',
        color: 'greylight01',
      },
      start: {
        backgroundColor: 'blue07',
        borderRadius: '12px',
        color: 'greylight01',
      },
      end: {
        backgroundColor: 'blue07',
        borderRadius: '12px',
        color: 'greylight01',
      },
      road: {
        backgroundColor: 'blue01',
      },
    },
  },
};

const datepicker = {
  dateNumberBox,
  dateNumber,
};

export default datepicker;
