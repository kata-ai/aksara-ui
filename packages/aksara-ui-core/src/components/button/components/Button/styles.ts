import { css } from 'styled-components';
import { layout, position, flexbox, grid, space, border } from 'styled-system';

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
import { ButtonBaseProps } from './types';

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
