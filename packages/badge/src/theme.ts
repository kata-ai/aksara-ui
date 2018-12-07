import { ThemeAttributes, variables } from '@kata-kit/theme';

export const entity: ThemeAttributes = {
  backgroundColor: variables.colors.gray70,
  textColor: variables.colors.white
};

export const primary: ThemeAttributes = {
  backgroundColor: variables.colors.kataBlue,
  textColor: variables.colors.white
};

export const secondary: ThemeAttributes = {
  backgroundColor: variables.colors.gray10,
  textColor: variables.colors.gray70
};

export const success: ThemeAttributes = {
  backgroundColor: variables.colors.green,
  textColor: variables.colors.white
};

export const warning: ThemeAttributes = {
  backgroundColor: variables.colors.yellow,
  textColor: variables.colors.gray70
};

export const danger: ThemeAttributes = {
  backgroundColor: variables.colors.red,
  textColor: variables.colors.white
};

const themes = {
  primary,
  secondary,
  success,
  warning,
  danger,
  defaultTheme: entity
};

export default themes;
