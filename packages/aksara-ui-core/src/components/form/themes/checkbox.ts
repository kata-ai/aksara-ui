import { colors } from '../../../utils';

export const checkboxThemeBase = {
  base: {
    backgroundColor: colors.grey01,
    borderColor: colors.grey04,
  },
  errors: {
    backgroundColor: colors.grey01,
    borderColor: colors.red07,
  },
};

export const checkboxThemeHover = {
  base: {
    backgroundColor: colors.grey01,
    borderColor: colors.indigo02,
  },
  errors: {
    backgroundColor: colors.grey01,
    borderColor: colors.red07,
  },
};

export const checkboxThemeChecked = {
  base: {
    backgroundColor: colors.blue08,
    borderColor: colors.blue08,
  },
  errors: {
    backgroundColor: colors.red07,
    borderColor: colors.red07,
  },
};
