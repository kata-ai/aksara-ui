import { ThemeAttributes } from './types';
import { variables } from './utils/variables';

export const defaultTheme: ThemeAttributes = {
  backgroundColor: variables.colors.gray10,
  linkColor: variables.colors.kataBlue,
  linkColorHover: variables.colors.darkKataBlue,
  linkColorActive: variables.colors.darkKataBlue,
  linkColorOutline: variables.colors.darkKataBlue,
  headingColor: variables.colors.gray80,
  textColor: variables.colors.gray70,
  borderColor: 'transparent',
  focusOutlineColor: variables.colors.softKataBlue,
  mutedHeadingColor: variables.colors.gray60,
  mutedTextColor: variables.colors.gray50
};
