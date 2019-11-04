import { css } from 'styled-components';

import { colors, boxShadow } from '../../utils/variables';
import {
  DefaultButton,
  PrimaryButton,
  OutlineButton,
  DestructiveButton,
  LinkButton,
  GhostButton,
  ButtonSmall,
  ButtonMedium,
  ButtonLarge
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

export type ButtonVariants = 'default' | 'primary' | 'outline' | 'destructive' | 'link' | 'ghost';
export type FloatingButtonVariants = 'default' | 'primary' | 'success' | 'warning' | 'destructive';
export type ButtonSizes = 'sm' | 'md' | 'lg';

export interface ButtonBaseProps {
  /** Is a block button. */
  block?: boolean;
  /** The variant of the button. */
  variant?: ButtonVariants;
  /** The size of the button. */
  size?: ButtonSizes;
}

export interface FloatingButtonBaseProps {
  variant?: FloatingButtonVariants;
  size?: ButtonSizes;
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

export const FloatingButtonStyles = (props: FloatingButtonBaseProps) => css`
  display: inline-block;
  position: relative;

  ${ButtonBase}

  font-weight: 500;
  line-height: 1;
  box-shadow: ${boxShadow.layer200};
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

export const ButtonStyles = (props: ButtonBaseProps) => css`
  display: ${props.block ? 'block' : 'inline-block'};
  ${props.block ? 'width: 100%;' : ''}
  position: relative;

  ${ButtonBase}

  ${props.variant === 'default' && DefaultButton}
  ${props.variant === 'primary' && PrimaryButton}
  ${props.variant === 'outline' && OutlineButton}
  ${props.variant === 'destructive' && DestructiveButton}
  ${props.variant === 'link' && LinkButton}
  ${props.variant === 'ghost' && GhostButton}

  ${props.size === 'sm' && ButtonSmall}
  ${props.size === 'md' && ButtonMedium}
  ${props.size === 'lg' && ButtonLarge}
`;
