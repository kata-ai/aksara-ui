import { DefaultTheme } from 'styled-components';
import type { ComponentThemeConfig, ComponentThemeScaleFn } from '../../system';

const actionListItemBaseStyle: ComponentThemeScaleFn<{ theme: DefaultTheme; isActive: boolean }> = ({
  theme,
  isActive,
}) => ({
  border: '1px solid transparent',
  height: 'auto',
  display: 'flex',
  alignItems: 'stretch',
  backgroundColor: isActive ? theme.colors.blue01 : theme.colors.grey01,
  color: isActive ? theme.colors.blue07 : theme.colors.greydark02,
  marginLeft: '8px',
  marginRight: '8px',
  borderRadius: '8px',
  cursor: 'pointer',

  '&[data-disabled]': {
    color: theme.colors.greymed01,
  },

  '&:focus-visible': {
    outline: '0px',
  },

  '&:focus': {
    border: `1px solid ${theme.colors.blue03}`,
  },

  '&:hover': {
    border: '1px solid transparent',
    backgroundColor: theme.colors.greylight03,
  },
});

const actionListItem: ComponentThemeConfig = {
  baseStyle: actionListItemBaseStyle,
};
const actionListStyle = {
  actionListItem,
};

export default actionListStyle;
