import { ThemeAttributes } from './types';
import { variables } from './utils/variables';

export const defaultTheme: ThemeAttributes = {
  backgroundColor: variables.colors.gray10,
  linkColor: variables.colors.kataBlue,
  linkColorHover: variables.colors.kataBlue,
  linkColorActive: '#0056b3',
  linkColorOutline: '#0056b3',
  headingColor: variables.colors.gray80,
  textColor: variables.colors.gray80,
  mutedHeadingColor: variables.colors.gray60,
  mutedTextColor: variables.colors.gray50
};
