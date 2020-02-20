import { css } from 'styled-components';
import { lighten } from 'polished';
import { themeGet } from '@styled-system/theme-get';
import { colors } from '../../../utils/variables';
import { IconButtonSizes } from '../types';

export function iconButtonSizes(size?: IconButtonSizes) {
  switch (size) {
    case 'lg':
      return 40;
    case 'md':
      return 32;
    case 'sm':
      return 24;
    default:
      return 32;
  }
}

export function iconSizes(size?: IconButtonSizes) {
  switch (size) {
    case 'lg':
      return 24;
    case 'md':
      return 16;
    case 'sm':
      return 12;
    default:
      return 20;
  }
}

export const IconButtonDefault = css`
  background-color: ${colors.gray10};
  color: ${colors.gray50};

  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus {
      background-color: ${colors.gray20};
      color: ${colors.gray50};
    }

    &:focus,
    &.focus,
    &:active,
    &.active {
      background-color: ${colors.gray70};
      color: ${colors.white};
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
  }

  &:disabled,
  &.disabled {
    background-color: ${lighten(0.02, colors.gray10)};
    color: ${colors.gray30};
  }
`;

export const IconButtonPrimary = css`
  background-color: ${colors.cobalt};
  color: ${colors.white};

  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus {
      background-color: ${colors.semiCobalt};
      color: ${colors.white};
    }

    &:focus,
    &.focus,
    &:active,
    &.active {
      background-color: ${colors.darkCobalt};
      border-color: ${colors.darkCobalt};
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
  }

  &:disabled,
  &.disabled {
    background-color: ${lighten(0.02, colors.gray10)};
    color: ${colors.gray30};
  }
`;

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
      box-shadow: 0px 0px 2px rgba(0, 111, 230, 0.5);
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
      box-shadow: 0px 0px 2px rgba(0, 111, 230, 0.5);
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
