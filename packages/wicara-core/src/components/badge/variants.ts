import { colors } from '../../utils';

export const primary = {
  backgroundColor: colors.kataBlue,
  color: colors.white,
};

export const secondary = {
  backgroundColor: colors.gray10,
  color: colors.gray70,
};

export const success = {
  backgroundColor: colors.green,
  color: colors.white,
};

export const warning = {
  backgroundColor: colors.yellow,
  color: colors.gray70,
};

export const danger = {
  backgroundColor: colors.red,
  color: colors.white,
};

const badgeVariants = {
  base: {
    backgroundColor: colors.grey08,
    color: colors.grey01,
  },
  label: {
    backgroundColor: colors.indigo01,
    borderColor: colors.indigo02,
    color: colors.grey08,
  },
  keyword: {
    backgroundColor: colors.grey01,
    borderColor: colors.red03,
    color: colors.grey08,
  },
  green: {
    backgroundColor: colors.green03,
    color: colors.grey08,
  },
  yellow: {
    backgroundColor: colors.yellow04,
    color: colors.grey08,
  },
  red: {
    backgroundColor: colors.red02,
    color: colors.grey08,
  },
  turquoise: {
    backgroundColor: colors.turquoise03,
    color: colors.grey08,
  },
  blue: {
    backgroundColor: colors.blue02,
    color: colors.grey08,
  },
};

export default badgeVariants;
