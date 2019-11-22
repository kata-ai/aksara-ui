import styled, { keyframes } from 'styled-components';

import { ANIMATION_DURATION } from '../../notification/utils/constants';

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

const DialogOverlay = styled('div')`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: fixed;
  z-index: 1000;
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
    background-color: rgba(0, 0, 0, 0.65);
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

DialogOverlay.displayName = 'DialogOverlay';

export default DialogOverlay;
