import { DefaultTheme } from 'styled-components';
import { ComponentThemeConfig } from '../types';

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

const topbar = {
  topbarBase,
};

export default topbar;
