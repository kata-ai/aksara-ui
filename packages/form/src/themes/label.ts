import {
  ThemeAttributes,
  variables,
  ThemeAttributesMap
} from '@kata-kit/theme';

const defaultTheme: ThemeAttributes = {
  backgroundColor: 'transparent',
  textColor: variables.colors.gray50
};

const withError: ThemeAttributes = {
  backgroundColor: 'transparent',
  textColor: variables.colors.red
};

const labelThemes: ThemeAttributesMap = {
  defaultTheme,
  withError
};

export default labelThemes;
