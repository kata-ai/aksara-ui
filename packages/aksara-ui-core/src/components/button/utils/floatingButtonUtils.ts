import { css } from 'styled-components';
import { colors } from '../../../utils';
import { FloatingButtonSizes } from '../types';

export function floatingButtonSizes(size?: FloatingButtonSizes) {
  switch (size) {
    case 64:
      return 64;
    case 40:
      return 40;
    case 32:
      return 32;
    default:
      return 40;
  }
}

export const FloatingButtonSmall = css`
  height: 32px;
  width: 32px;
  font-size: 13px;
  border-radius: 32px;

  i:before {
    font-size: 13px !important;
  }

  svg {
    width: 20px !important;
    height: 20px !important;
  }
`;

export const FloatingButtonMedium = css`
  height: 40px;
  width: 40px;
  font-size: 16px;
  border-radius: 40px;

  i:before {
    font-size: 16px !important;
  }

  svg {
    width: 24px !important;
    height: 24px !important;
  }
`;

export const FloatingButtonLarge = css`
  height: 64px;
  width: 64px;
  font-size: 24px;
  border-radius: 64px;

  i:before {
    font-size: 24px !important;
  }

  svg {
    width: 32px !important;
    height: 32px !important;
  }
`;

export const FloatingButtonPrimary = css`
  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus,
    &:active,
    &.active {
      color: ${colors.blue08};
    }
  }
`;

export const FloatingButtonSuccess = css`
  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus,
    &:active,
    &.active {
      color: ${colors.green07};
    }
  }
`;

export const FloatingButtonWarning = css`
  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus,
    &:active,
    &.active {
      color: ${colors.yellow07};
    }
  }
`;

export const FloatingButtonDestructive = css`
  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus,
    &:active,
    &.active {
      color: ${colors.red07};
    }
  }
`;
