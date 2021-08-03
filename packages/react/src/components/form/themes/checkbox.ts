import { theme } from '../../../theme';

export const checkboxThemeBase = {
  base: {
    backgroundColor: theme.colors.grey01,
    borderColor: theme.colors.grey04,
  },
  errors: {
    backgroundColor: theme.colors.grey01,
    borderColor: theme.colors.red07,
  },
};

export const checkboxThemeHover = {
  base: {
    backgroundColor: theme.colors.grey01,
    borderColor: theme.colors.indigo02,
  },
  errors: {
    backgroundColor: theme.colors.grey01,
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
