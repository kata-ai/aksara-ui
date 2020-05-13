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
import { OutlineButtonBaseProps, ButtonBaseProps, FloatingButtonBaseProps } from './types';

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
