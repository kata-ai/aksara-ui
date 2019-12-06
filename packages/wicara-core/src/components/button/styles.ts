import { css } from 'styled-components';

import { colors, shadows } from '../../utils/variables';
import {
  ButtonDefault,
  ButtonPrimary,
  ButtonSupport,
  ButtonDestructive,
  ButtonLink,
  ButtonGhost,
  ButtonSmall,
  ButtonMedium,
  ButtonLarge,
  InverseButton
} from './utils/buttonUtils';
import {
  FloatingButtonSmall,
  FloatingButtonMedium,
  FloatingButtonLarge,
  FloatingButtonPrimary,
  FloatingButtonSuccess,
  FloatingButtonWarning,
  FloatingButtonDestructive
} from './utils/floatingButtonUtils';
import {
  IconButtonDefault,
  IconButtonPrimary,
  IconButtonSupport,
  IconButtonDestructive,
  IconButtonGhost
} from './utils/iconButtonUtils';
import {
  OutlineButtonSmall,
  OutlineButtonMedium,
  OutlineButtonLarge,
  OutlineButtonDefault,
  OutlineButtonPrimary,
  OutlineButtonSuccess,
  OutlineButtonWarning,
  OutlineButtonDestructive
} from './utils/outlineButtonUtils';

export type ButtonVariants =
  | 'default'
  | 'primary'
  | 'support'
  | 'destructive'
  | 'link'
  | 'ghost'
  | 'inverse';
export type FloatingButtonVariants = 'default' | 'primary' | 'success' | 'warning' | 'destructive';
export type OutlineButtonVariants = 'default' | 'primary' | 'success' | 'warning' | 'destructive';
export type IconButtonVariants = 'default' | 'primary' | 'support' | 'destructive' | 'ghost';
export type ButtonSizes = 'sm' | 'md' | 'lg';
export type ButtonIconPositions = 'left' | 'right';

export interface ButtonBaseProps {
  /** Is a block button. */
  block?: boolean;
  /** The variant of the button. */
  variant?: ButtonVariants;
  /** The size of the button. */
  size?: ButtonSizes;
  /** The icon that renders with the button */
  icon?: string | React.ReactNode;
  /** Icon position. Default is `'left'`. */
  iconPosition?: ButtonIconPositions;
}

export interface OutlineButtonBaseProps {
  /** Is a block button. */
  block?: boolean;
  /** The variant of the button. */
  variant?: OutlineButtonVariants;
  /** The size of the button. */
  size?: ButtonSizes;
  /** The icon that renders with the button */
  icon?: string | React.ReactNode;
  /** Icon position. Default is `'left'`. */
  iconPosition?: ButtonIconPositions;
}

export interface FloatingButtonBaseProps {
  /** The variant of the button. */
  variant?: FloatingButtonVariants;
  /** The size of the button. */
  size?: ButtonSizes;
}

export interface IconButtonBaseProps {
  /** The variant of the button. */
  variant?: IconButtonVariants;
}

export const ButtonBase = css`
  margin: 0;
  padding: 0;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  background: none;
  text-decoration: none;
  line-height: 1;
  letter-spacing: 0.2px;
  border: 1px solid transparent;
  transition: all 0.3s ease;

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

export const FloatingButtonStyles = (props: FloatingButtonBaseProps) => css`
  display: inline-block;
  position: relative;

  ${ButtonBase}

  box-shadow: ${shadows.layer200};
  vertical-align: middle;
  background-color: ${colors.white};
  color: ${colors.gray60};

  i:before {
    vertical-align: middle;
  }

  &:disabled,
  &.disabled {
    opacity: 0.5;
  }

  ${props.size === 'sm' && FloatingButtonSmall}
  ${props.size === 'md' && FloatingButtonMedium}
  ${props.size === 'lg' && FloatingButtonLarge}

  ${props.variant === 'primary' && FloatingButtonPrimary}
  ${props.variant === 'success' && FloatingButtonSuccess}
  ${props.variant === 'warning' && FloatingButtonWarning}
  ${props.variant === 'destructive' && FloatingButtonDestructive}
`;

export const IconButtonStyles = (props: IconButtonBaseProps) => css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;
  text-align: center;
  border-radius: 4px;

  ${ButtonBase}

  i {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  i:before {
    font-size: 16px;
  }

  svg {
    width: 16px;
    height: 16px;
  }

  ${props.variant === 'default' && IconButtonDefault}
  ${props.variant === 'primary' && IconButtonPrimary}
  ${props.variant === 'support' && IconButtonSupport}
  ${props.variant === 'destructive' && IconButtonDestructive}
  ${props.variant === 'ghost' && IconButtonGhost}
`;

export const ButtonStyles = (props: ButtonBaseProps) => css`
  display: ${props.block ? 'block' : 'inline-block'};
  ${props.block ? 'width: 100%;' : ''}
  position: relative;

  ${ButtonBase}

  ${props.variant === 'default' && ButtonDefault}
  ${props.variant === 'primary' && ButtonPrimary}
  ${props.variant === 'support' && ButtonSupport}
  ${props.variant === 'destructive' && ButtonDestructive}
  ${props.variant === 'link' && ButtonLink}
  ${props.variant === 'ghost' && ButtonGhost}
  ${props.variant === 'inverse' && InverseButton}

  ${props.size === 'sm' && ButtonSmall(props)}
  ${props.size === 'md' && ButtonMedium(props)}
  ${props.size === 'lg' && ButtonLarge(props)}
`;

export const OutlineButtonStyles = (props: OutlineButtonBaseProps) => css`
  display: ${props.block ? 'block' : 'inline-block'};
  ${props.block ? 'width: 100%;' : ''}
  position: relative;

  ${ButtonBase}

  background-color: ${colors.white};
  border-color: ${colors.gray30};

  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover {
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
    color: inherit;
    opacity: 0.5;
  }

  ${props.variant === 'default' && OutlineButtonDefault}
  ${props.variant === 'primary' && OutlineButtonPrimary}
  ${props.variant === 'success' && OutlineButtonSuccess}
  ${props.variant === 'warning' && OutlineButtonWarning}
  ${props.variant === 'destructive' && OutlineButtonDestructive}

  ${props.size === 'sm' && OutlineButtonSmall(props)}
  ${props.size === 'md' && OutlineButtonMedium(props)}
  ${props.size === 'lg' && OutlineButtonLarge(props)}
`;
