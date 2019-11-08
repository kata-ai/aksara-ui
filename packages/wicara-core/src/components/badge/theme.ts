import { colors } from '../../utils';

export const entity = {
  backgroundColor: colors.gray70,
  textColor: colors.white
};

export const primary = {
  backgroundColor: colors.kataBlue,
  textColor: colors.white
};

export const secondary = {
  backgroundColor: colors.gray10,
  textColor: colors.gray70
};

export const success = {
  backgroundColor: colors.green,
  textColor: colors.white
};

export const warning = {
  backgroundColor: colors.yellow,
  textColor: colors.gray70
};

export const danger = {
  backgroundColor: colors.red,
  textColor: colors.white
};

const badgeThemes = {
  entity,
  primary,
  secondary,
  success,
  warning,
  danger
};

export default badgeThemes;
