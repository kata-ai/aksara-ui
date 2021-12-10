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
  minHeight: '20px',
  px: 'md',
  // '&:focus-visible': {
  //   outline: 'none',
  //   padding: '0px',
  //   boxShadow: `0 0 0 2px rgba(175, 214, 255, 0.7)`,
  // },

  '&:hover': {
    backgroundColor: isSelected ? theme.colors.blue01 : theme.colors.greylight03,
    boxShadow: 'none',
  },
});

const listItemBase: ComponentThemeConfig = {
  baseStyle: listItemBaseStyle,
};

const listStyle = {
  listItemBase,
};

export default listStyle;
