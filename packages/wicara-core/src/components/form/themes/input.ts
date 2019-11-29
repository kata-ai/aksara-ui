import { lighten } from 'polished';
import { colors } from '../../../utils';

const defaultTheme = {
  backgroundColor: colors.white,
  backgroundColorHover: colors.gray10,
  backgroundColorActive: colors.white,
  textColor: colors.gray80,
  mutedTextColor: colors.gray50,
  borderColor: colors.gray30,
  borderColorHover: colors.kataBlue,
  focusOutlineColor: colors.softKataBlue
};

const error = {
  ...defaultTheme,
  borderColor: colors.red,
  borderColorHover: colors.red,
  focusOutlineColor: lighten(0.3, colors.red)
};

const inputThemes = {
  defaultTheme,
  error
};

export default inputThemes;
