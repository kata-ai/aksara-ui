import { colors } from '../../../utils';

export const inputThemeBase = {
  base: {
    color: colors.grey08,
    backgroundColor: colors.grey01,
    borderColor: colors.grey04,
  },
  errors: {
    color: colors.grey08,
    backgroundColor: colors.grey01,
    borderColor: colors.grey04,
  },
};

export const inputThemeHover = {
  base: {
    color: colors.grey08,
    backgroundColor: colors.grey01,
    borderColor: colors.indigo02,
  },
  errors: {
    color: colors.grey08,
    backgroundColor: colors.grey01,
    borderColor: colors.indigo02,
  },
};

export const inputThemeFocus = {
  base: {
    color: colors.grey08,
    backgroundColor: colors.grey01,
    borderColor: colors.blue06,
    boxShadow: `0 0 0 1px ${colors.blue06}`,
  },
  errors: {
    color: colors.grey08,
    backgroundColor: colors.grey01,
    borderColor: colors.red07,
    boxShadow: `0 0 0 1px ${colors.red07}`,
  },
};
