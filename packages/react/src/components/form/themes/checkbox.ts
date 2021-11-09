import { theme } from '../../../theme';

export const checkboxThemeBase = {
  base: {
    backgroundColor: theme.colors.greylight01,
    borderColor: theme.colors.greylight05,
  },
  errors: {
    backgroundColor: theme.colors.greylight01,
    borderColor: theme.colors.red07,
  },
};

export const checkboxThemeHover = {
  base: {
    backgroundColor: theme.colors.greylight03,
    borderColor: theme.colors.greymed01,
  },
  errors: {
    backgroundColor: theme.colors.greylight03,
    borderColor: theme.colors.red07,
  },
};

export const checkboxThemeChecked = {
  base: {
    backgroundColor: theme.colors.blue08,
    borderColor: theme.colors.blue08,
  },
  errors: {
    backgroundColor: theme.colors.red07,
    borderColor: theme.colors.red07,
  },
};
