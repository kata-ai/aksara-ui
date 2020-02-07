import { transparentize } from 'polished';
import { colors } from '../variables';

const shadowColor = transparentize(0.85, colors.grey09);

const card = {
  1: {
    boxShadow: 'none',
  },
  2: {
    boxShadow: `0px 2px 6px ${shadowColor};`,
  },
  3: {
    boxShadow: `0px 6px 12px ${shadowColor};`,
  },
  4: {
    boxShadow: `0px 12px 24px ${shadowColor};`,
  },
  5: {
    boxShadow: `0px 24px 48px ${shadowColor};`,
  },
};

export default card;
