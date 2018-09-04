import {
  ThemeAttributes,
  variables,
  ThemeAttributesMap
} from '@kata-kit/theme';
import { lighten } from 'polished';

const defaultTheme: ThemeAttributes = {
  backgroundColor: variables.colors.white,
  backgroundColorHover: variables.colors.gray10,
  backgroundColorActive: variables.colors.white,
  textColor: variables.colors.gray80,
  borderColor: variables.colors.gray30,
  borderColorHover: variables.colors.kataBlue,
  focusOutlineColor: variables.colors.softKataBlue
};

const withError: ThemeAttributes = {
  ...defaultTheme,
  borderColor: variables.colors.red,
  borderColorHover: variables.colors.red,
  focusOutlineColor: lighten(0.3, variables.colors.red)
};

const inputThemes: ThemeAttributesMap = {
  defaultTheme,
  withError
};

export default inputThemes;
