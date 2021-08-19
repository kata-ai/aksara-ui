import { ComponentThemeConfig } from '../types';

const pillRoot: ComponentThemeConfig = {
  baseStyle: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    fontSize: 200,
    lineHeight: 200,
    fontWeight: 400,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'transparent',
  },
  propToScaleMap: [['variant', 'variants']],
  scales: {
    variants: {
      default: {
        backgroundColor: 'greylight04',
        color: 'greymed04',
        borderColor: 'greylight04',
      },
      grey: {
        backgroundColor: 'greylight04',
        color: 'greymed04',
        borderColor: 'greylight04',
      },
      indigo: {
        backgroundColor: 'indigo01',
        color: 'indigo06',
        borderColor: 'indigo01',
      },
      red: {
        backgroundColor: 'red01',
        color: 'red07',
        borderColor: 'red01',
      },
      green: {
        backgroundColor: 'green01',
        color: 'green07',
        borderColor: 'green01',
      },
      blue: {
        backgroundColor: 'blue01',
        color: 'blue07',
        borderColor: 'blue01',
      },
    },
  },
};

const pill = {
  pillRoot,
};

export default pill;
