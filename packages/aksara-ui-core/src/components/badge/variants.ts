const badgeVariants = {
  base: {
    backgroundColor: 'grey08',
    color: 'grey01',
  },
  label: {
    backgroundColor: 'indigo01',
    borderColor: 'indigo03',
    color: 'grey08',
  },
  dashed: {
    borderColor: 'indigo03',
    borderStyle: 'dashed',
    color: 'grey08',
  },
  keyword: {
    backgroundColor: 'grey01',
    borderColor: 'red03',
    color: 'grey08',
  },
  green: {
    backgroundColor: 'green03',
    color: 'grey08',
  },
  yellow: {
    backgroundColor: 'yellow04',
    color: 'grey08',
  },
  red: {
    backgroundColor: 'red02',
    color: 'grey08',
  },
  turquoise: {
    backgroundColor: 'turquoise03',
    color: 'grey08',
  },
  blue: {
    backgroundColor: 'blue02',
    color: 'grey08',
  },
};

export type BadgeVariants = keyof typeof badgeVariants;

export default badgeVariants;
