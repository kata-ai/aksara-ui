import { DefaultTheme } from 'styled-components';
import type { ComponentThemeConfig, ComponentThemeScaleFn } from '../../system';

const baseStyle: ComponentThemeScaleFn<{ theme: DefaultTheme; isActive: boolean }> = ({ theme, isActive }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '32px',
  width: '32px',
  textAlign: 'center',
  borderRadius: '8px',
  border: '1px solid transparent',
  userSelect: 'none',
  '&:focus': {
    backgroundColor: theme.colors.grey02,
  },
  '&:active': {
    borderColor: theme.colors.blue05,
  },
  ...(isActive
    ? {
        '&:hover': {
          backgroundColor: theme.colors.blue07,
        },
      }
    : {}),
  backgroundColor: isActive ? theme.colors.blue07 : theme.colors.grey01,
  color: isActive ? theme.colors.white : 'inherit',
});

const paginationButton: ComponentThemeConfig = {
  baseStyle,
};
const pagination = {
  paginationButton,
};

export default pagination;
