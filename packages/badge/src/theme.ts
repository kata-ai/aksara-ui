import { ThemeAttributes, variables } from '@kata-kit/theme';

export const defaultTheme: ThemeAttributes = {
  backgroundColor: variables.colors.gray70,
  textColor: variables.colors.white
};

export const primaryTheme: ThemeAttributes = {
  backgroundColor: variables.colors.kataBlue,
  textColor: variables.colors.white
};

export const secondaryTheme: ThemeAttributes = {
  backgroundColor: variables.colors.gray10,
  textColor: variables.colors.gray70
};

export const successTheme: ThemeAttributes = {
  backgroundColor: variables.colors.green,
  textColor: variables.colors.white
};

export const warningTheme: ThemeAttributes = {
  backgroundColor: variables.colors.yellow,
  textColor: variables.colors.gray70
};

export const dangerTheme: ThemeAttributes = {
  backgroundColor: variables.colors.red,
  textColor: variables.colors.white
};

const themes = {
  default: defaultTheme,
  primary: primaryTheme,
  secondary: secondaryTheme,
  success: successTheme,
  warning: warningTheme,
  danger: dangerTheme
};

export default themes;
