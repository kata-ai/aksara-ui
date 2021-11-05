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
    '--topbar-disclosure-button-bg-color': isActive ? theme.colors.blue01 : theme.colors.greylight01,
    '--topbar-disclosure-button-foreground-color': isActive ? theme.colors.blue07 : theme.colors.greydark02,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    backgroundColor: 'var(--topbar-disclosure-button-bg-color)',
    color: 'var(--topbar-disclosure-button-foreground-color)',
    borderRadius: 9999,
    outline: 'none',
    '&:hover': {
      '--topbar-disclosure-button-bg-color': isActive ? theme.colors.blue01 : theme.colors.greylight03,
    },
    '&:active': {
      '--topbar-disclosure-button-bg-color': isActive ? theme.colors.blue01 : theme.colors.blue02,
    },
    '&:focus': {
      outline: 'none',
      boxShadow: `0 0 0 2px rgba(175, 214, 255, 0.7)`,
    },
  }),
};

const topbarDisclosureButton: ComponentThemeConfig = {
  baseStyle: ({ theme, isActive }: { theme: DefaultTheme; isActive?: boolean }) => ({
    '--topbar-disclosure-button-bg-color': isActive ? theme.colors.blue01 : theme.colors.greylight01,
    '--topbar-disclosure-button-foreground-color': isActive ? theme.colors.blue07 : theme.colors.greydark02,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '40px',
    px: 'xs',
    backgroundColor: 'var(--topbar-disclosure-button-bg-color)',
    color: 'var(--topbar-disclosure-button-foreground-color)',
    borderRadius: 8,
    outline: 'none',
    '&:hover': {
      '--topbar-disclosure-button-bg-color': isActive ? theme.colors.blue01 : theme.colors.greylight03,
    },
    '&:active': {
      '--topbar-disclosure-button-bg-color': isActive ? theme.colors.blue01 : theme.colors.blue02,
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
  topbarDisclosureButton,
};

export default topbar;
