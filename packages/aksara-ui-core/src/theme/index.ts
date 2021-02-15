import foundations from './foundations';
import componentStyles from './componentStyles';

export const theme = {
  ...foundations,
  componentStyles,
};

export type Theme = typeof theme;
export type ComponentStyles = typeof componentStyles;

export type Color = keyof Theme['colors'];
export type Space = keyof Theme['space'];
export type CardElevation = keyof ComponentStyles['card']['elevation'];

export * from './types';
