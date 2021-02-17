import foundations from './foundations';
import componentStyles from './componentStyles';

export const theme = {
  ...foundations,
  componentStyles,
};

export type Theme = typeof theme;

export * from './types';
