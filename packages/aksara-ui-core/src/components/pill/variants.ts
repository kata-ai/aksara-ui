export const pillSizeVariants = {
  40: {
    px: 'md',
    py: 'sm',
    fontSize: 14,
  },
  32: {
    px: 'sm',
    py: 'xs',
    fontSize: 14,
  },
  24: {
    px: 'sm',
    py: 'xxs',
    fontSize: 14,
  },
};

export const boxMarginVariants = {
  40: '44px',
  32: 'xl',
  24: 'lg',
};

export const pillColorVariants = {
  default: {
    color: 'grey08',
    backgroundColor: 'green03',
  },
  outline: {
    borderWidth: 'indigo03',
    borderStyle: 'solid',
    borderColor: 'indigo03',
    backgroundColor: 'indigo01',
    color: 'grey08',
  },
  yellow: {
    color: 'grey08',
    backgroundColor: 'yellow03',
  },
  red: {
    color: 'grey08',
    backgroundColor: 'red03',
  },
  tertiary: {
    color: 'grey08',
    backgroundColor: 'turquoise03',
  },
  secondary: {
    color: 'grey08',
    backgroundColor: 'indigo03',
  },
  blue: {
    color: 'grey08',
    backgroundColor: 'blue03',
  },
};

export type PillSizeVariants = keyof typeof pillSizeVariants;
export type PillColorVariants = keyof typeof pillColorVariants;
