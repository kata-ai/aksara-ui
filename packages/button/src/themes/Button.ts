import { darken, lighten } from 'polished';

import {
  ThemeAttributes,
  variables,
  ThemeAttributesMap
} from '@kata-kit/theme';

const primary: ThemeAttributes = {
  backgroundColor: variables.colors.cobalt,
  backgroundColorHover: variables.colors.semiCobalt,
  backgroundColorActive: variables.colors.darkCobalt,
  textColor: variables.colors.white,
  linkColorHover: variables.colors.white,
  linkColorActive: variables.colors.white
};

const secondary: ThemeAttributes = {
  backgroundColor: variables.colors.gray10,
  backgroundColorHover: variables.colors.gray20,
  backgroundColorActive: variables.colors.gray70,
  textColor: variables.colors.gray50,
  linkColorHover: variables.colors.gray50,
  linkColorActive: variables.colors.white
};

const success: ThemeAttributes = {
  backgroundColor: variables.colors.green,
  backgroundColorHover: lighten(0.025, variables.colors.green),
  backgroundColorActive: darken(0.025, variables.colors.green),
  textColor: variables.colors.white,
  linkColorHover: variables.colors.white,
  linkColorActive: variables.colors.white
};

const warning: ThemeAttributes = {
  backgroundColor: variables.colors.yellow,
  backgroundColorHover: lighten(0.05, variables.colors.yellow),
  backgroundColorActive: darken(0.025, variables.colors.yellow),
  textColor: variables.colors.gray70,
  linkColorHover: variables.colors.gray70,
  linkColorActive: variables.colors.gray70
};

const danger: ThemeAttributes = {
  backgroundColor: variables.colors.red,
  backgroundColorHover: lighten(0.05, variables.colors.red),
  backgroundColorActive: darken(0.05, variables.colors.red),
  textColor: variables.colors.white,
  linkColorHover: variables.colors.white,
  linkColorActive: variables.colors.white
};

const white: ThemeAttributes = {
  backgroundColor: variables.colors.white,
  backgroundColorHover: variables.colors.gray10,
  backgroundColorActive: variables.colors.gray70,
  textColor: variables.colors.gray70,
  linkColorHover: variables.colors.gray70,
  linkColorActive: variables.colors.white,
  borderColor: variables.colors.gray30,
  borderColorActive: variables.colors.gray70
};

const buttonThemes: ThemeAttributesMap = {
  primary,
  secondary,
  success,
  warning,
  danger,
  white,
  info: primary,
  defaultTheme: secondary
};

export default buttonThemes;
