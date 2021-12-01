import { DefaultTheme } from 'styled-components';
import type { ComponentThemeConfig, ComponentThemeScaleFn } from '../../system';

const actionListItemBaseStyle: ComponentThemeScaleFn<{ theme: DefaultTheme; isActive: boolean }> = ({
  theme,
  isActive,
}) => ({
  position: 'relative',
  overflow: 'hidden',
  height: 'auto',
  display: 'flex',
  alignItems: 'stretch',
  backgroundColor: isActive ? theme.colors.blue01 : theme.colors.grey01,
  color: isActive ? theme.colors.blue07 : theme.colors.greydark02,
  borderRadius: '8px',

  '&:focus-visible': {
    outline: 'none',
    padding: '0px',
    boxShadow: `0 0 0 2px rgba(175, 214, 255, 0.7)`,
  },

  '&:hover': {
    backgroundColor: theme.colors.greylight03,
    boxShadow: 'none',
  },
  '&:active': {
    backgroundColor: theme.colors.blue02,
  },

  '&[data-disabled]': {
    color: theme.colors.greymed01,
    backgroundColor: theme.colors.greylight01,
    cursor: 'not-allowed',
  },
});

const actionListItem: ComponentThemeConfig = {
  baseStyle: actionListItemBaseStyle,
};
const actionListStyle = {
  actionListItem,
};

export default actionListStyle;
