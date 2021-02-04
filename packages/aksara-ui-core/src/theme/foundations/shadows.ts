import { transparentize } from 'polished';
import colors from './colors';

const shadowColor = transparentize(0.85, colors.grey09);

/** Custom elevation variant for the Card component. */
const shadows = {
  1: 'none',
  2: `0px 2px 6px ${shadowColor};`,
  3: `0px 6px 12px ${shadowColor};`,
  4: `0px 12px 24px ${shadowColor};`,
  5: `0px 24px 48px ${shadowColor};`,
};

export default shadows;
