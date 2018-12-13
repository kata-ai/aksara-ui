import { css, ThemedStyledProps } from 'styled-components';

import { ThemeAttributes } from '@kata-kit/theme';
import { ModalProps } from './components/Modal';

export type WithThemeProps<P = {}> = ThemedStyledProps<P, ThemeAttributes>;

const modalBoxShadow = '0 4px 6px 2px rgba(0, 0, 0, 0.15)';
const modalTransition = 'cubic-bezier(0.15, 1, 0.3, 1)';

export const ModalBase = (props: WithThemeProps<ModalProps>) =>
  css`
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    min-height: 1px;
    z-index: 1050;
    transition: opacity 0.15s ease-out;
    visibility: hidden;

    &.is-open {
      visibility: visible;
    }
  `;

export const ModalContentStyles = (props: WithThemeProps<ModalProps>) =>
  css`
    display: flex;
    flex-direction: column;
    pointer-events: auto;
    border-width: 0;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: ${modalBoxShadow};
    background-color: ${props.theme.backgroundColor};
    color: ${props.theme.textColor};
  `;

export const ModalDialogStyles = (props: WithThemeProps<ModalProps>) =>
  css`
    position: relative;
    width: 100%;
    max-width: 500px;
    margin: 1.75rem auto;
    transform: translate(0, -25%);
    transition: all 0.5s ${modalTransition};
    opacity: 0;

    &.is-open {
      transform: translate(0, 0);
      opacity: 1;
    }
  `;

export const ModalOverlayStyles = css`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1040;
  background-color: #000;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s ${modalTransition};

  &.is-open {
    opacity: 0.65;
    visibility: visible;
  }
`;
