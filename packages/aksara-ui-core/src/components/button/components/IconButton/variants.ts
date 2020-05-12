import { colors } from '../../../../utils';

export const iconButtonDefaultVariants = {
  default: {
    color: 'grey08',
  },
  outline: {
    borderColor: 'grey04',
    backgroundColor: 'grey01',
    color: 'grey08',
  },
  destructive: {
    color: 'red05',
  },
  ghost: {
    color: 'grey08',
  },
};

export const iconButtonHoverVariants = {
  default: {
    color: 'blue08',
  },
  outline: {
    backgroundColor: 'grey03',
    color: 'blue08',
  },
  destructive: {
    color: 'red07',
  },
  ghost: {
    color: 'blue08',
  },
};

export const iconButtonFocusVariants = {
  default: {
    color: 'blue08',
    borderColor: 'blue06',
    borderWidth: '2px',
    boxShadow: '0 0 2px 1px rgba(0, 111, 230, 0.5)',
  },
  outline: {
    backgroundColor: 'grey03',
    color: 'blue08',
    borderColor: 'blue06',
    borderWidth: '2px',
    boxShadow: '0 0 2px 1px rgba(0, 111, 230, 0.5)',
  },
  destructive: {
    borderColor: 'red06',
    borderWidth: '2px',
    color: 'red07',
  },
  ghost: {
    color: 'blue08',
    borderColor: 'blue06',
    borderWidth: '2px',
    boxShadow: '0 0 2px 1px rgba(0, 111, 230, 0.5)',
  },
};

export const iconButtonDisabledVariants = {
  default: {
    color: 'grey04',
  },
  outline: {
    backgroundColor: 'grey01',
    borderColor: 'grey04',
    color: 'grey04',
  },
  destructive: {
    color: 'grey04',
  },
  ghost: {
    color: 'grey04',
  },
};
