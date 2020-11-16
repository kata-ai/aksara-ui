import { ButtonSizes } from '../types';

const loadingIconSizes = (size?: ButtonSizes) => {
  switch (size) {
    case 48:
      return 40;
    case 40:
      return 32;
    case 32:
      return 24;
    default:
      return 32;
  }
};

export default loadingIconSizes;
