import { theme } from '../../../theme';

export const inputThemeBase = {
  base: {
    color: theme.colors.grey08,
    backgroundColor: theme.colors.grey01,
    borderColor: theme.colors.grey04,
  },
  errors: {
    color: theme.colors.grey08,
    backgroundColor: theme.colors.grey01,
    borderColor: theme.colors.red07,
  },
};

export const inputThemeHover = {
  base: {
    color: theme.colors.grey08,
    backgroundColor: theme.colors.grey01,
    borderColor: theme.colors.indigo02,
  },
  errors: {
    color: theme.colors.grey08,
    backgroundColor: theme.colors.grey01,
    borderColor: theme.colors.red07,
  },
};

export const inputThemeFocus = {
  base: {
    color: theme.colors.grey08,
    backgroundColor: theme.colors.grey01,
    borderColor: theme.colors.blue06,
    boxShadow: `0 0 0 1px ${theme.colors.blue06}`,
  },
  errors: {
    color: theme.colors.grey08,
    backgroundColor: theme.colors.grey01,
    borderColor: theme.colors.red07,
    boxShadow: `0 0 0 1px ${theme.colors.red07}`,
  },
};
