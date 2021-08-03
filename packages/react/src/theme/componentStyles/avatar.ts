import { ComponentThemeConfig } from '../types';

const avatar: ComponentThemeConfig = {
  propToScaleMap: [['size', 'sizes']],
  baseStyle: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    border: '1px solid',
    borderColor: 'white',
    verticalAlign: 'middle',
    overflow: 'hidden',
    userSelect: 'none',
  },
  scales: {
    sizes: {
      24: {
        width: '24px',
        height: '24px',
        borderRadius: '24px',
      },
      32: {
        width: '32px',
        height: '32px',
        borderRadius: '32px',
      },
      40: {
        width: '40px',
        height: '40px',
        borderRadius: '40px',
      },
    },
  },
};

export default avatar;
