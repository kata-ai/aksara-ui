import { css, ThemedStyledProps } from 'styled-components';

import { ThemeAttributes } from '@kata-kit/theme';
import { DrawerProps } from './components/Drawer';

export type WithThemeProps<P = {}> = ThemedStyledProps<P, ThemeAttributes>;

const drawerBoxShadow = '0 4px 6px 2px rgba(0, 0, 0, 0.15)';

export const DrawerBase = (props: WithThemeProps<DrawerProps>) =>
  css`
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    min-height: 1px;
    width: 480px;
    padding-bottom: 170px;
    z-index: 1035;
    box-shadow: ${drawerBoxShadow};
    background-color: ${props.theme.backgroundColor};
    color: ${props.theme.textColor};
    transition: all 0.5s cubic-bezier(0.15, 1, 0.3, 1);

    &.is-open {
      visibility: visible;
    }

    &.is-closed {
      visibility: hidden;
      transform: translateX(100%);
    }
  `;

export const DrawerRight = css`
  left: auto;
  right: 0;
  border-right: none;
  box-shadow: ${drawerBoxShadow};

  &.fold {
    margin-left: 0;
  }

  &.folding {
    transition-property: margin-right;
  }
`;

export const DrawerOverlayStyles = css`
  &.is-open {
    position: fixed;
    z-index: 1000;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.65);
  }
`;
