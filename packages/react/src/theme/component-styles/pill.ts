import type { ComponentThemeConfig } from '../../system';

const pillRoot: ComponentThemeConfig = {
  baseStyle: {
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 24,
    px: 'xs',
    borderRadius: 'lg',
    backgroundColor: 'greylight04',
    '&:not([disabled])': {
      cursor: 'pointer',
      '&:focus, &:active, &:hover': {
        backgroundColor: 'greydark02',
        color: 'greylight01',
      },
    },
    '&[disabled]': {
      backgroundColor: 'greylight05',
      color: 'greylight01',
    },
    '&:focus': {
      boxShadow: `0 0 0 2px rgba(175, 214, 255, 0.7)`,
    },
    '&:focus-visible': {
      outline: 'none',
      boxShadow: `0 0 0 2px rgba(175, 214, 255, 0.7)`,
    },
  },
};

const pill = {
  pillRoot,
};

export default pill;
