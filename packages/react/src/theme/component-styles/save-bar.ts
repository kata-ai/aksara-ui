import type { DefaultTheme } from 'styled-components';
import type { ComponentThemeConfig, ComponentThemeScaleFn } from '../../system';

const saveBarBaseStyle: ComponentThemeScaleFn<{ theme: DefaultTheme }> = ({ theme }: { theme: DefaultTheme }) => ({
  display: 'flex',
  position: 'fixed',
  left: 0,
  top: 0,
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  height: '56px',
  px: 'lg',
  backgroundColor: theme.colors.greydark02,
});

const saveBarBase: ComponentThemeConfig = {
  baseStyle: saveBarBaseStyle,
};

const savebarStyle = {
  saveBarBase,
};

export default savebarStyle;
