import { colors } from '../../utils';

const success = {
  backgroundColor: colors.green,
  textColor: colors.white,
};

const info = {
  backgroundColor: colors.kataBlue,
  textColor: colors.white,
};

const warning = {
  backgroundColor: colors.yellow,
  textColor: colors.gray70,
};

const error = {
  backgroundColor: colors.red,
  textColor: colors.white,
};

export const messageThemes = {
  success,
  info,
  warning,
  error,
};

export const closeButtonVariants = {
  general: {
    color: 'grey08',
  },
  success: {
    color: 'green07',
  },
  warning: {
    color: 'yellow07',
  },
  error: {
    color: 'red07',
  },
  info: {
    color: 'blue07',
  },
};

const messageVariants = {
  general: {
    borderColor: 'grey04',
    backgroundColor: 'grey01',
    color: 'grey08',
  },
  success: {
    borderColor: 'green06',
    backgroundColor: 'grey01',
    color: 'green07',
    borderLeftWidth: '4px',
  },
  warning: {
    borderColor: 'yellow05',
    backgroundColor: 'grey01',
    color: 'yellow07',
    borderLeftWidth: '4px',
  },
  error: {
    borderColor: 'red05',
    backgroundColor: 'grey01',
    color: 'red07',
    borderLeftWidth: '4px',
  },
  info: {
    borderColor: 'blue06',
    backgroundColor: 'grey01',
    color: 'blue07',
    borderLeftWidth: '4px',
  },
};

export default messageVariants;
