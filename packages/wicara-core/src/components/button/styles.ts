import { css } from 'styled-components';
import { typeScale, colors } from '../../utils/variables';

export type ButtonVariants = 'default' | 'primary' | 'outline' | 'destructive' | 'link' | 'ghost';
export type ButtonSizes = 'sm' | 'md' | 'lg';

export interface ButtonBaseProps {
  /** Is a block button. */
  block?: boolean;
  /** The variant of the button. */
  variant?: ButtonVariants;
  /** The size of the button. */
  size?: ButtonSizes;
}

export const DefaultButton = css`
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

export const PrimaryButton = css`
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

export const OutlineButton = css`
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

export const LinkButton = css`
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

export const DestructiveButton = css`
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

export const GhostButton = css`
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

export const SizeSmall = css`
  height: 32px;
  padding: 0 16px;
  font-size: 11px;
  line-height: 32px;
  border-radius: 4px;
  font-weight: 700;
`;

export const SizeMedium = css`
  height: 40px;
  padding: 0 24px;
  font-size: 13px;
  line-height: 40px;
  border-radius: 4px;
  font-weight: 500;
`;

export const SizeLarge = css`
  height: 56px;
  padding: 0 24px;
  font-size: ${typeScale.large.fontSize}px;
  line-height: 56px;
  border-radius: 4px;
  font-weight: 500;
`;

export const ButtonBase = css`
  display: inline-block;
  position: relative;
  margin: 0;
  padding: 0;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  background: none;
  text-decoration: none;
  letter-spacing: 0.2px;
  border: 1px solid transparent;

  &:not(:disabled):not(.disabled) {
    cursor: pointer;
  }

  &:hover,
  &:focus {
    text-decoration: none;
  }

  &:focus {
    outline: 0px;
  }
`;

export const ButtonStyles = (props: ButtonBaseProps) => css`
  ${ButtonBase}

  ${props.variant === 'default' && DefaultButton}
  ${props.variant === 'primary' && PrimaryButton}
  ${props.variant === 'outline' && OutlineButton}
  ${props.variant === 'destructive' && DestructiveButton}
  ${props.variant === 'link' && LinkButton}
  ${props.variant === 'ghost' && GhostButton}

  ${props.size === 'sm' && SizeSmall}
  ${props.size === 'md' && SizeMedium}
  ${props.size === 'lg' && SizeLarge}
`;
