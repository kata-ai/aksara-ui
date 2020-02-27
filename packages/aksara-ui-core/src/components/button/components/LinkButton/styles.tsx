import styled from 'styled-components';
import { variant } from 'styled-system';

import { ButtonBase } from '../../styles';
import { ButtonBaseProps } from '../../types';
import {
  linkButtonSizeVariants,
  linkButtonDefaultVariants,
  linkButtonHoverVariants,
  linkButtonFocusVariants,
  linkButtonDisabledVariants,
  iconPositionVariants,
  linkButtonPaddingVariants,
} from './variants';

export type LinkButtonVariants = 'primary' | 'destructive' | 'inverse';
export type LinkButtonSizes = 'sm' | 'md';

export interface LinkButtonBaseProps extends Omit<ButtonBaseProps, 'size'> {
  variant?: LinkButtonVariants;
  buttonSize?: LinkButtonSizes;
  /** True if the button is disabled due to loading */
  isLoading?: boolean;
}

export const LinkButtonBase = styled('button')<LinkButtonBaseProps>`
  ${ButtonBase}

  ${variant({ prop: 'variant', variants: linkButtonDefaultVariants })}

  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover {
      ${variant({ prop: 'variant', variants: linkButtonHoverVariants })}
    }

    &:focus,
    &.focus,
    &:active,
    &.active {
      ${variant({ prop: 'variant', variants: linkButtonFocusVariants })}
    }
  }

  &:disabled,
  &.disabled {
    ${variant({ prop: 'variant', variants: linkButtonDisabledVariants })}
  }

  ${variant({ prop: 'buttonSize', variants: linkButtonSizeVariants })}
  ${props =>
    props.icon && props.iconPosition
      ? variant({ prop: 'iconPosition', variants: linkButtonPaddingVariants })(props)
      : null}
`;

export const LinkButtonIcon = styled('span')<Pick<LinkButtonBaseProps, 'buttonSize' | 'iconPosition' | 'variant'>>`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  ${variant({ prop: 'iconPosition', variants: iconPositionVariants })}

  & i {
    display: flex;
    align-items: center;
    vertical-align: middle;
  }
`;

export const InvisibleText = styled('span')`
  visibility: hidden;
`;
