import { css } from 'styled-components';
import { typeScale, colors } from '../../../utils/variables';
import { ButtonBaseProps } from '../types';

export const ButtonDefault = css`
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
    border-color: #a7aeb0;
    background-color: #c2c7c8;
    color: ${colors.white};
  }
`;

export const ButtonPrimary = css`
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
    border-color: #a7aeb0;
    background-color: #c2c7c8;
    color: ${colors.white};
  }
`;

export const ButtonSupport = css`
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

export const ButtonLink = css`
  color: ${colors.kataBlue};

  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus {
      color: ${colors.darkKataBlue};
      text-decoration: underline;
    }

    &:focus,
    &.focus,
    &:active,
    &.active {
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
  }

  &:disabled,
  &.disabled {
    color: ${colors.gray50};
  }
`;

export const ButtonDestructive = css`
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
    border-color: #a7aeb0;
    background-color: #c2c7c8;
    color: ${colors.white};
  }
`;

export const ButtonGhost = css`
  color: ${colors.kataBlue};

  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus {
      background-color: ${colors.gray10};
      color: ${colors.darkKataBlue};
    }

    &:focus,
    &.focus,
    &:active,
    &.active {
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
  }

  &:disabled,
  &.disabled {
    color: ${colors.gray50};
  }
`;

export const ButtonSmall = (props: ButtonBaseProps) => css`
  height: 32px;
  padding: 0 16px;
  font-size: 11px;
  border-radius: 4px;
  font-weight: 700;

  ${props.icon && props.iconPosition === 'left' && 'padding-left: 36px;'}
  ${props.icon && props.iconPosition === 'right' && 'padding-right: 36px;'}
`;

export const ButtonMedium = (props: ButtonBaseProps) => css`
  height: 40px;
  padding: 0 24px;
  font-size: 13px;
  border-radius: 4px;
  font-weight: 500;

  ${props.icon && props.iconPosition === 'left' && 'padding-left: 46px;'}
  ${props.icon && props.iconPosition === 'right' && 'padding-right: 46px;'}
`;

export const ButtonLarge = (props: ButtonBaseProps) => css`
  height: 56px;
  padding: 0 24px;
  font-size: ${typeScale.large.fontSize}px;
  border-radius: 4px;
  font-weight: 500;

  ${props.icon && props.iconPosition === 'left' && 'padding-left: 46px;'}
  ${props.icon && props.iconPosition === 'right' && 'padding-right: 46px;'}
`;

export const InverseButton = css`
  border-color: ${colors.white};
  color: ${colors.white};

  &:disabled,
  &.disabled {
    opacity: 0.5;
  }
`;
