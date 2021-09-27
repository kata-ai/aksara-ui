import { transparentize } from 'polished';

const shadowColor = transparentize(0.68, '#89949F');

/** Custom elevation variant for the Card component. */
const shadows = {
  1: 'none',
  2: `0px 2px 4px ${shadowColor};`,
  3: `0px 4px 8px ${shadowColor};`,
  4: `0px 8px 16px ${shadowColor};`,
  5: `0px 16px 32px ${shadowColor};`,
};

export type Shadows = typeof shadows;

export default shadows;
