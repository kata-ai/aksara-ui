import { css } from 'styled-components';
import { variables } from '@kata-kit/theme';
import { ButtonColors, ButtonSizes } from './components/Button';

export interface ButtonBaseProps {
  /** Is a block button. */
  block?: boolean;
  /** The color of the button. */
  color?: ButtonColors;
  /** The size of the button. */
  size?: ButtonSizes;
}

const ButtonBase = (props: ButtonBaseProps) =>
  css`
    display: ${props.block ? 'block' : 'inline-block'};
    position: relative;
    width: ${props.block ? '100%' : 'auto'};
    background: none;
    letter-spacing: 0.2px;
    border: 1px solid transparent;
    font-size: ${props.size === 'sm' ? '11px' : '13px'};
    line-height: ${props.size === 'sm' ? '16px' : '20px'};
    text-decoration: none;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    transition: all 0.3s ease;

    &:hover {
      text-decoration: none;
    }

    &:focus {
      text-decoration: none;
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }

    &.focus {
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }

    &:not(:disabled):not(.disabled) {
      cursor: pointer;
    }

    &.disabled,
    &:disabled {
      opacity: 0.65;
      color: ${variables.colors.white};
    }

    &.icon {
      height: 32px;
      width: 32px;
      padding: 4px 8px;
      text-align: center;
      background-color: transparent;
      color: ${variables.colors.gray60};

      i {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
      }

      &:disabled,
      &.disabled {
        &:hover,
        &:focus,
        &:active {
          color: ${variables.colors.gray60};
        }
      }

      i:before {
        font-size: 16px;
      }
    }
  `;

export default ButtonBase;
