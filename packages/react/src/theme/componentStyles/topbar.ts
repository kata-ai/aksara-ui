import type { DefaultTheme } from 'styled-components';
import type { ComponentThemeConfig } from '../../system';

const topbarBase: ComponentThemeConfig = {
  baseStyle: ({ theme }: { theme: DefaultTheme }) => ({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '56px',
    backgroundColor: theme.colors.greylight01,
    px: 'lg',
    py: 'xs',
  }),
};

const topbarRoundedButton: ComponentThemeConfig = {
  baseStyle: ({ theme, isActive }: { theme: DefaultTheme; isActive?: boolean }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    backgroundColor: isActive ? theme.colors.blue01 : theme.colors.greylight01,
    color: isActive ? theme.colors.blue07 : theme.colors.greydark02,
    borderRadius: 9999,
    outline: 'none',
    '&:hover': {
      backgroundColor: isActive ? theme.colors.blue01 : theme.colors.greylight03,
    },
    '&:active': {
      backgroundColor: isActive ? theme.colors.blue01 : theme.colors.blue02,
    },
    '&:focus': {
      outline: 'none',
      boxShadow: `0 0 0 2px rgba(175, 214, 255, 0.7)`,
    },
  }),
};

const topbar = {
  topbarBase,
  topbarRoundedButton,
};

export default topbar;
