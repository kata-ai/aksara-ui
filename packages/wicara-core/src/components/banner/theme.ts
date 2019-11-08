import { colors } from '../../utils';

const success = {
  backgroundColor: colors.green,
  textColor: colors.white
};

const info = {
  backgroundColor: colors.kataBlue,
  textColor: colors.white
};

const warning = {
  backgroundColor: colors.yellow,
  textColor: colors.gray70
};

const error = {
  backgroundColor: colors.red,
  textColor: colors.white
};

const bannerThemes = {
  success,
  info,
  warning,
  error
};

export default bannerThemes;
