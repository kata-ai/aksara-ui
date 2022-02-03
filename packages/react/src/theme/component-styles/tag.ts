import type { ComponentThemeConfig, ComponentThemeScaleFn } from '../../system';

const tagStyle: ComponentThemeScaleFn<{ selected: boolean }> = ({ selected }) => ({
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
  height: 24,
  px: 'xs',
  borderRadius: 'lg',
  backgroundColor: selected ? 'greydark02' : 'greylight04',
  color: selected ? 'greylight01' : 'inherit',
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
});

const tagRoot: ComponentThemeConfig = {
  baseStyle: tagStyle,
};

const tag = {
  tagRoot,
};

export default tag;

//
