import type { DefaultTheme } from 'styled-components';
import type { ComponentThemeConfig, ComponentThemeScaleFn } from '../../system';

const listItemBaseStyle: ComponentThemeScaleFn<{ theme: DefaultTheme; isSelected: boolean }> = ({
  theme,
  isSelected,
}) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: isSelected ? theme.colors.blue01 : theme.colors.greylight01,
  color: isSelected ? theme.colors.blue07 : theme.colors.greydark02,
  minHeight: '48px',
  px: 'md',
  boxShadow: isSelected ? 'inset 0px -1px 0px #E5EAEF' : 'inset 0px -1px 0px #eff2f5',

  '&:hover': {
    backgroundColor: isSelected ? theme.colors.blue01 : theme.colors.greylight03,
    boxShadow: 'none',
  },
});

const listHeaderBaseStyle: ComponentThemeScaleFn<{ theme: DefaultTheme }> = ({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: theme.colors.greylight01,
  color: theme.colors.greydark02,
  height: '40px',
  px: 'md',
  boxShadow: 'inset 0px -1px 0px #eff2f5',
});

const listItemBase: ComponentThemeConfig = {
  baseStyle: listItemBaseStyle,
};

const listHeaderBase: ComponentThemeConfig = {
  baseStyle: listHeaderBaseStyle,
};

const list = {
  listItemBase,
  listHeaderBase,
};

export default list;
