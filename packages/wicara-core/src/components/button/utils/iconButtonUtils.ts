import { css } from 'styled-components';
import { lighten } from 'polished';
import { colors } from '../../../utils/variables';
import { IconButtonSizes } from '../types';

export function iconButtonSizes(size?: IconButtonSizes) {
  switch (size) {
    case 'md':
      return 40;
    case 'sm':
      return 32;
    default:
      return 32;
  }
}

export function iconSizes(size?: IconButtonSizes) {
  switch (size) {
    case 'md':
      return 20;
    case 'sm':
      return 16;
    default:
      return 16;
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
  background-color: ${colors.white};
  color: ${colors.gray50};
  border-color: ${colors.gray30};

  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus {
      background-color: ${colors.gray10};
    }

    &:focus,
    &.focus,
    &:active,
    &.active {
      background-color: ${colors.gray70};
      color: ${colors.white};
      border-color: ${colors.gray70};
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
  }

  &:disabled,
  &.disabled {
    background-color: ${colors.white};
    color: ${colors.gray30};
    border-color: ${colors.gray10};
  }
`;

export const IconButtonDestructive = css`
  background-color: ${colors.red};
  color: ${colors.white};

  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus {
      background-color: #e84f4c;
      color: ${colors.white};
    }

    &:focus,
    &.focus,
    &:active,
    &.active {
      background-color: ${colors.red};
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
  }

  &:disabled,
  &.disabled {
    background-color: ${lighten(0.02, colors.gray10)};
    color: ${colors.gray30};
  }
`;

export const IconButtonGhost = css`
  color: ${colors.gray50};

  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus {
      background-color: ${colors.gray10};
    }

    &:focus,
    &.focus,
    &:active,
    &.active {
      background-color: ${colors.gray70};
      color: ${colors.white};
      border-color: ${colors.gray70};
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
  }

  &:disabled,
  &.disabled {
    color: ${colors.gray30};
  }
`;
