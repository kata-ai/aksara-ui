import { DefaultTheme } from 'styled-components';
import type { ComponentThemeConfig, ComponentThemeScaleFn } from '../../system';

const paginationButtonBaseStyle: ComponentThemeScaleFn<{ theme: DefaultTheme; isActive: boolean }> = ({
  theme,
  isActive,
}) => ({
  display: 'inline-flex',
  outline: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  height: '32px',
  width: '32px',
  textAlign: 'center',
  borderRadius: '8px',
  border: '1px solid transparent',
  userSelect: 'none',
  '&:hover': {
    backgroundColor: theme.colors.greylight03,
  },
  '&:focus': {
    backgroundColor: theme.colors.grey01,
    border: '2px solid rgba(175, 214, 255, 0.7)',
  },
  '&:active': {
    borderColor: theme.colors.blue05,
    backgroundColor: theme.colors.blue01,
  },
  ...(isActive
    ? {
        '&:hover': {
          backgroundColor: theme.colors.blue07,
        },
        '&:focus': {
          backgroundColor: theme.colors.blue07,
        },
        '&:active': {
          backgroundColor: theme.colors.blue07,
        },
      }
    : {}),
  backgroundColor: isActive ? theme.colors.blue07 : theme.colors.grey01,
  color: isActive ? theme.colors.white : 'inherit',
});

const paginationButton: ComponentThemeConfig = {
  baseStyle: paginationButtonBaseStyle,
};
const pagination = {
  paginationButton,
};

export default pagination;
