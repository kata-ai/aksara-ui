import { colors } from '../../utils';

const badgeVariants = {
  base: {
    backgroundColor: colors.grey08,
    color: colors.grey01,
  },
  label: {
    backgroundColor: colors.indigo01,
    borderColor: colors.indigo03,
    color: colors.grey08,
  },
  dashed: {
    borderColor: colors.indigo03,
    borderStyle: 'dashed',
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

export type BadgeVariants = keyof typeof badgeVariants;

export default badgeVariants;
