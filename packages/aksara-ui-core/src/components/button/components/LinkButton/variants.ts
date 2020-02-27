import { componentStyles, radii, colors } from '../../../../utils';

export const linkButtonDefaultVariants = {
  primary: {
    color: colors.blue06,
  },
  destructive: {
    color: colors.red05,
  },
  inverse: {
    color: colors.grey01,
  },
};

export const linkButtonHoverVariants = {
  primary: {
    color: colors.blue08,
    textDecoration: 'underline',
  },
  destructive: {
    color: colors.red07,
    textDecoration: 'underline',
  },
  inverse: {
    color: colors.grey01,
    textDecoration: 'underline',
  },
};

export const linkButtonFocusVariants = {
  primary: {
    color: colors.blue08,
    textDecoration: 'underline',
    boxShadow: `0 0 0 1px ${colors.blue04}`,
  },
  destructive: {
    color: colors.red07,
    textDecoration: 'underline',
    boxShadow: `0 0 0 1px ${colors.red04}`,
  },
  inverse: {
    color: colors.grey01,
    textDecoration: 'underline',
    boxShadow: `0 0 0 1px ${colors.blue04}`,
  },
};

export const linkButtonDisabledVariants = {
  primary: {
    color: colors.grey04,
  },
  destructive: {
    color: colors.grey04,
  },
  inverse: {
    color: colors.grey04,
  },
};

export const linkButtonSizeVariants = {
  sm: {
    height: '32px',
    fontSize: componentStyles.text[300].fontSize,
    lineHeight: componentStyles.text[300].lineHeight,
    borderRadius: radii.sm,
  },
  md: {
    height: '40px',
    fontSize: componentStyles.text[300].fontSize,
    lineHeight: componentStyles.text[300].lineHeight,
    borderRadius: radii.sm,
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
