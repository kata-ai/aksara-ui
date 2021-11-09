import type { DefaultTheme } from 'styled-components';
import { ComponentThemeConfig } from '../../system';

const popoverContent: ComponentThemeConfig = {
  baseStyle: ({ theme }: { theme: DefaultTheme }) => ({
    '--popover-border': theme.colors.greylight01,
    '--popover-background': theme.colors.greylight01,
    backgroundColor: 'var(--popover-background)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'var(--popover-border)',
    borderRadius: 12,
    boxShadow: 4,
    zIndex: 1000,
  }),
};

const popover = {
  popoverContent,
};

export default popover;
