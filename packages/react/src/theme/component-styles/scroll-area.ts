import type { DefaultTheme } from 'styled-components';
import type { ComponentThemeConfig, ComponentThemeScaleFn } from '../../system';

const SCROLLBAR_SIZE = 10;

const scrollBarThumbsStyle: ComponentThemeScaleFn<{ theme: DefaultTheme }> = ({ theme }: { theme: DefaultTheme }) => ({
  flex: 1,
  background: theme.colors.greymed04,
  borderRadius: SCROLLBAR_SIZE,
  // increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    minWidth: 44,
    minHeight: 44,
  },
});

const scrollBarThumbs: ComponentThemeConfig = {
  baseStyle: scrollBarThumbsStyle,
};

const scrollBarStyle: ComponentThemeScaleFn<{ theme: DefaultTheme }> = ({ theme }: { theme: DefaultTheme }) => ({
  display: 'flex',
  userSelect: 'none',
  touchAction: 'none',
  padding: 2,
  background: theme.colors.greylight02,
  transition: 'background 160ms ease-out',
  '&:hover': {
    background: theme.colors.greylight03,
  },
  '&[data-orientation="vertical"]': { width: SCROLLBAR_SIZE },
  '&[data-orientation="horizontal"]': {
    flexDirection: 'column',
    height: SCROLLBAR_SIZE,
  },
});

const scrollBar: ComponentThemeConfig = {
  baseStyle: scrollBarStyle,
};

const scrollAreaStyle = {
  scrollBarThumbs,
  scrollBar,
};

export default scrollAreaStyle;
