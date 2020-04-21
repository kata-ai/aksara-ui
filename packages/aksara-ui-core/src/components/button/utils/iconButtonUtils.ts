import { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { colors } from '../../../utils/variables';
import { IconButtonSizes } from '../types';

export function iconButtonSizes(size?: IconButtonSizes) {
  return size || 32;
}

export function iconSizes(size?: IconButtonSizes) {
  switch (size) {
    case 40:
      return 24;
    case 32:
      return 16;
    case 24:
      return 12;
    default:
      return 20;
  }
}

const IconButtonBase = css`
  color: ${themeGet('colors.grey08', colors.grey08)};

  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover {
      color: ${themeGet('colors.blue08', colors.blue08)};
    }

    &:focus,
    &.focus {
      color: ${themeGet('colors.blue08', colors.blue08)};
      border-color: ${themeGet('colors.blue04', colors.blue04)};
      box-shadow: 0 0 2px 1px rgba(0, 111, 230, 0.5);
    }

    &:active,
    &.active {
      border-color: ${themeGet('colors.indigo02', colors.indigo02)};
    }
  }

  &:disabled,
  &.disabled {
    color: ${colors.grey04};
  }
`;

export const IconButtonDefault = IconButtonBase;

export const IconButtonPrimary = IconButtonBase;

export const IconButtonSupport = css`
  background-color: ${themeGet('colors.grey01', colors.grey01)};
  color: ${themeGet('colors.grey08', colors.grey08)};
  border-color: ${themeGet('colors.grey04', colors.grey04)};

  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus {
      background-color: ${themeGet('colors.grey03', colors.grey03)};
      color: ${themeGet('colors.blue08', colors.blue08)};
    }

    &:focus,
    &.focus,
    &:active,
    &.active {
      background-color: ${themeGet('colors.grey03', colors.grey03)};
      color: ${themeGet('colors.blue08', colors.blue08)};
      border-width: 2px;
      border-color: ${themeGet('colors.blue06', colors.blue06)};
      box-shadow: 0 0 2px 1px rgba(0, 111, 230, 0.5);
    }
  }

  &:disabled,
  &.disabled {
    background-color: ${themeGet('colors.grey01', colors.grey01)};
    color: ${themeGet('colors.grey04', colors.grey04)};
    border-color: ${themeGet('colors.grey04', colors.grey04)};
  }
`;

export const IconButtonDestructive = css`
  color: ${themeGet('colors.red05', colors.red05)};

  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus {
      color: ${themeGet('colors.red07', colors.red07)};
    }

    &:focus,
    &.focus,
    &:active,
    &.active {
      border-color: ${themeGet('colors.red04', colors.red04)};
    }
  }

  &:disabled,
  &.disabled {
    color: ${colors.grey04};
  }
`;

export const IconButtonGhost = css`
  color: ${themeGet('colors.grey08', colors.grey08)};

  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover {
      color: ${themeGet('colors.blue08', colors.blue08)};
    }

    &:focus,
    &.focus {
      color: ${themeGet('colors.blue08', colors.blue08)};
      border-color: ${themeGet('colors.blue04', colors.blue04)};
      box-shadow: 0 0 2px 1px rgba(0, 111, 230, 0.5);
    }

    &:active,
    &.active {
      border-color: ${themeGet('colors.indigo02', colors.indigo02)};
    }
  }

  &:disabled,
  &.disabled {
    color: ${colors.grey04};
  }
`;
