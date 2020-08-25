import { css } from 'styled-components';
import { variant, layout, position, flexbox, grid, space, border } from 'styled-system';
import { ButtonBase } from '../Button/styles';
import { AllButtonStyledProps } from '../Button/types';
import {
  iconButtonDefaultVariants,
  iconButtonHoverVariants,
  iconButtonFocusVariants,
  iconButtonDisabledVariants,
} from './variants';

export type IconButtonVariants = 'default' | 'outline' | 'destructive' | 'ghost';
export type IconButtonSizes = 24 | 32 | 40;

export interface IconButtonBaseProps extends AllButtonStyledProps {
  /** The variant of the button. */
  variant?: IconButtonVariants;
  /** The size of the button. `size` is reserved by styled-system, so we alias its type. */
  buttonSize?: IconButtonSizes;
  /** Add a "selected" style for use in toggle buttons. */
  selected?: boolean;
}

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

export const IconButtonStyles = (props: IconButtonBaseProps) => css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${iconButtonSizes(props.buttonSize)}px;
  width: ${iconButtonSizes(props.buttonSize)}px;
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
    font-size: ${iconSizes(props.buttonSize)}px;
  }

  svg {
    width: ${iconSizes(props.buttonSize)}px;
    height: ${iconSizes(props.buttonSize)}px;
  }

  ${variant({ prop: 'variant', variants: iconButtonDefaultVariants })}

  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover {
      ${variant({ prop: 'variant', variants: iconButtonHoverVariants })}
    }

    &:focus,
    &.focus,
    &:active,
    &.active {
      ${variant({ prop: 'variant', variants: iconButtonFocusVariants })}

    }
  }

  &:disabled,
  &.disabled {
    ${variant({ prop: 'variant', variants: iconButtonDisabledVariants })}
  }

  ${layout}
  ${position}
  ${flexbox}
  ${grid}
  ${space}
  ${border}
`;
