import { ThemeAttributes, variables } from '@kata-kit/theme';

const success: ThemeAttributes = {
  backgroundColor: variables.colors.green,
  textColor: variables.colors.white
};

const info: ThemeAttributes = {
  backgroundColor: variables.colors.kataBlue,
  textColor: variables.colors.white
};

const warning: ThemeAttributes = {
  backgroundColor: variables.colors.yellow,
  textColor: variables.colors.white
};

const error: ThemeAttributes = {
  backgroundColor: variables.colors.red,
  textColor: variables.colors.white
};

const themes = {
  default: error,
  success,
  info,
  warning,
  error
};

export default themes;
