import styled, { keyframes } from 'styled-components';
import { transparentize } from 'polished';

import { ANIMATION_DURATION } from '../../notification/utils/constants';
import { theme } from '../../../theme';

const FadeIn = keyframes`
  0% {
    visibility: hidden;
    opacity: 0;
  }

  100% {
    visibility: visible;
    opacity: 1;
  }
`;

const FadeOut = keyframes`
  0% {
    visibility: visible;
    opacity: 1;
  }

  100% {
    visibility: hidden;
    opacity: 0;
  }
`;

const ModalOverlay = styled('div')`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: fixed;
  z-index: 1010;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  &::before {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${transparentize(0.35, theme.colors.grey09)};
    content: ' ';
    visibility: hidden;
    opacity: 0;
  }

  &[data-state='entering'],
  &[data-state='entered'] {
    &::before {
      animation-fill-mode: forwards;
      animation-name: ${FadeIn};
      animation-duration: ${ANIMATION_DURATION}ms;
    }
  }

  &[data-state='exiting'] {
    &::before {
      animation-fill-mode: forwards;
      animation-name: ${FadeOut};
      animation-duration: ${ANIMATION_DURATION}ms;
    }
  }

  &.entered {
    &::before {
      visibility: visible;
      opacity: 1;
    }
  }
`;

ModalOverlay.displayName = 'DialogOverlay';

/** @deprecated - use `ModalOverlay` instead */
export const DialogOverlay = ModalOverlay;

export default ModalOverlay;
