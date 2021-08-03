import { theme } from '../../../../theme';

export const linkButtonDefaultVariants = {
  primary: {
    color: 'blue06',
  },
  destructive: {
    color: 'red05',
  },
  inverse: {
    color: 'grey01',
  },
};

export const linkButtonHoverVariants = {
  primary: {
    color: 'blue08',
    textDecoration: 'underline',
  },
  destructive: {
    color: 'red07',
    textDecoration: 'underline',
  },
  inverse: {
    color: 'grey01',
    textDecoration: 'underline',
  },
};

export const linkButtonFocusVariants = {
  primary: {
    color: 'blue08',
    textDecoration: 'underline',
    boxShadow: `0 0 0 1px ${theme.colors.blue04}`,
  },
  destructive: {
    color: 'red07',
    textDecoration: 'underline',
    boxShadow: `0 0 0 1px ${theme.colors.red04}`,
  },
  inverse: {
    color: 'grey01',
    textDecoration: 'underline',
    boxShadow: `0 0 0 1px ${theme.colors.blue04}`,
  },
};

export const linkButtonDisabledVariants = {
  primary: {
    color: 'grey04',
  },
  destructive: {
    color: 'grey04',
  },
  inverse: {
    color: 'grey04',
  },
};

export const linkButtonSizeVariants = {
  32: {
    height: '32px',
    fontSize: 300,
    lineHeight: 300,
    borderRadius: theme.radii.sm,
  },
  40: {
    height: '40px',
    fontSize: 300,
    lineHeight: 300,
    borderRadius: theme.radii.sm,
  },
};

export const linkButtonPaddingVariants = {
  left: {
    paddingLeft: '28px',
  },
  right: {
    paddingRight: '28px',
  },
};

export const iconPositionVariants = {
  left: {
    left: 0,
  },
  right: {
    right: 0,
  },
};
