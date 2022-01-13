import { DefaultTheme } from 'styled-components';
import { transparentize } from 'polished';
import type { ComponentThemeConfig, ComponentThemeScaleFn } from '../../system';

const actionListItemBaseStyle: ComponentThemeScaleFn<{ theme: DefaultTheme }> = ({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  height: 'auto',
  display: 'flex',
  alignItems: 'stretch',
  borderRadius: '8px',
  cursor: 'pointer',

  '&:focus-visible': {
    outline: 'none',
    padding: '0px',
    boxShadow: `0 0 0 2px rgba(175, 214, 255, 0.7)`,
  },

  '&[data-disabled]': {
    color: theme.colors.greymed01,
    backgroundColor: theme.colors.greylight01,
    cursor: 'not-allowed',
  },
});

const actionListItemDefaultStyle: ComponentThemeScaleFn<{ theme: DefaultTheme; isActive: boolean }> = ({
  theme,
  isActive,
}) => ({
  backgroundColor: isActive ? theme.colors.blue01 : theme.colors.grey01,
  color: isActive ? theme.colors.blue07 : theme.colors.greydark02,
  '&:hover': {
    backgroundColor: isActive ? theme.colors.blue01 : theme.colors.greylight03,
    boxShadow: 'none',
  },
  '&:active': {
    backgroundColor: theme.colors.blue02,
  },
});

const actionListItemDestructiveStyle: ComponentThemeScaleFn<{ theme: DefaultTheme; isActive: boolean }> = ({
  theme,
  isActive,
}) => ({
  backgroundColor: isActive ? theme.colors.blue01 : theme.colors.grey01,
  color: theme.colors.red07,
  '&:hover': {
    backgroundColor: theme.colors.red02,
    boxShadow: 'none',
  },
  '&:active': {
    backgroundColor: transparentize(0.2, theme.colors.red03),
  },
});

const actionListItem: ComponentThemeConfig = {
  propToScaleMap: [['variant', 'variants']],
  baseStyle: actionListItemBaseStyle,
  scales: {
    variants: {
      default: actionListItemDefaultStyle,
      destructive: actionListItemDestructiveStyle,
    },
  },
};
const actionListStyle = {
  actionListItem,
};

export default actionListStyle;
