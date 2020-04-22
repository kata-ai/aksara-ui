import { css } from 'styled-components';
import { layout, position, flexbox, grid, space, border } from 'styled-system';

import { colors, shadows } from '../../utils/variables';
import {
  ButtonDefault,
  ButtonPrimary,
  ButtonSupport,
  ButtonDestructive,
  ButtonGhost,
  ButtonSmall,
  ButtonMedium,
  ButtonLarge,
  InverseButton,
} from './utils/buttonUtils';
import {
  FloatingButtonSmall,
  FloatingButtonMedium,
  FloatingButtonLarge,
  FloatingButtonPrimary,
  FloatingButtonSuccess,
  FloatingButtonWarning,
  FloatingButtonDestructive,
} from './utils/floatingButtonUtils';
import {
  IconButtonDefault,
  IconButtonSupport,
  IconButtonDestructive,
  IconButtonGhost,
  iconButtonSizes,
  iconSizes,
} from './utils/iconButtonUtils';
import {
  OutlineButtonSmall,
  OutlineButtonMedium,
  OutlineButtonLarge,
  OutlineButtonDefault,
  OutlineButtonPrimary,
  OutlineButtonSuccess,
  OutlineButtonWarning,
  OutlineButtonDestructive,
} from './utils/outlineButtonUtils';
import { OutlineButtonBaseProps, ButtonBaseProps, IconButtonBaseProps, FloatingButtonBaseProps } from './types';

export const ButtonBase = css`
  margin: 0;
  padding: 0;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  background: none;
  text-decoration: none;
  font-weight: 400;
  line-height: 1;
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;

  ${ButtonBase}

  box-shadow: ${shadows.layer200};
  vertical-align: middle;
  background-color: ${colors.white};
  color: ${colors.grey07};

  i:before {
    vertical-align: middle;
  }

  &:disabled,
  &.disabled {
    opacity: 0.5;
  }

  ${props.buttonSize === 32 && FloatingButtonSmall}
  ${props.buttonSize === 40 && FloatingButtonMedium}
  ${props.buttonSize === 64 && FloatingButtonLarge}

  ${props.variant === 'primary' && FloatingButtonPrimary}
  ${props.variant === 'success' && FloatingButtonSuccess}
  ${props.variant === 'warning' && FloatingButtonWarning}
  ${props.variant === 'destructive' && FloatingButtonDestructive}

  ${layout}
  ${position}
  ${flexbox}
  ${grid}
  ${space}
  ${border}
`;

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

  ${props.variant === 'default' && IconButtonDefault}
  ${props.variant === 'primary' && IconButtonGhost}
  ${props.variant === 'outline' && IconButtonSupport}
  ${props.variant === 'destructive' && IconButtonDestructive}
  ${props.variant === 'ghost' && IconButtonGhost}

  ${layout}
  ${position}
  ${flexbox}
  ${grid}
  ${space}
  ${border}
`;

export const ButtonStyles = (props: ButtonBaseProps) => css`
  ${ButtonBase}

  ${props.variant === 'default' && ButtonDefault}
  ${props.variant === 'primary' && ButtonPrimary}
  ${props.variant === 'outline' && ButtonSupport}
  ${props.variant === 'destructive' && ButtonDestructive}
  ${props.variant === 'ghost' && ButtonGhost}
  ${props.variant === 'inverse' && InverseButton}

  ${props.buttonSize === 32 && ButtonSmall(props)}
  ${props.buttonSize === 40 && ButtonMedium(props)}
  ${props.buttonSize === 48 && ButtonLarge(props)}


  ${layout}
  ${position}
  ${flexbox}
  ${grid}
  ${space}
  ${border}
`;

export const OutlineButtonStyles = (props: OutlineButtonBaseProps) => css`
  ${ButtonBase}

  background-color: ${colors.white};
  border-color: ${colors.grey04};

  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover {
      background-color: ${colors.grey03};
      border-color: ${colors.grey04};
    }

    &:focus,
    &.focus,
    &:active,
    &.active {
      background-color: ${colors.grey03};
      border-color: ${colors.blue06};
      box-shadow: 0 0 2px 1px rgba(0, 111, 230, 0.4), 0 0 0 1px ${colors.blue06};
    }
  }

  &:disabled,
  &.disabled {
    border-color: ${colors.grey04};
    background-color: ${colors.grey01};
    color: ${colors.grey04};
  }

  ${props.variant === 'default' && OutlineButtonDefault}
  ${props.variant === 'primary' && OutlineButtonPrimary}
  ${props.variant === 'success' && OutlineButtonSuccess}
  ${props.variant === 'warning' && OutlineButtonWarning}
  ${props.variant === 'destructive' && OutlineButtonDestructive}

  ${props.buttonSize === 32 && OutlineButtonSmall(props)}
  ${props.buttonSize === 40 && OutlineButtonMedium(props)}
  ${props.buttonSize === 48 && OutlineButtonLarge(props)}

  ${layout}
  ${position}
  ${flexbox}
  ${grid}
  ${space}
  ${border}
`;
