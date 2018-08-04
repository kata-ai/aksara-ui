import { css, ThemedStyledProps } from 'styled-components';

export interface ButtonBaseProps {
  block?: boolean;
}

const ButtonBase = (props: ThemedStyledProps<ButtonBaseProps, any>) => css`
  display: ${props.block ? 'block' : 'inline-block'};
  position: relative;
  border: none;
  background: none;
  letter-spacing: 0.2px;
  border: 1px solid transparent;
  font-size: 1rem;
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

  &:not(:disabled),
  &:not(.disabled) {
    cursor: pointer;
  }

  &.disabled,
  &:disabled {
    opacity: 0.65;
  }

  &:not(:disabled):not(.disabled) {
    cursor: pointer;
  }

  &.icon {
    height: 32px;
    width: 32px;
    padding: 8px;
    text-align: center;
    background: none;
    color: #676b6d /* $gray-60 */;

    i:before {
      font-size: 16px;
    }
  }
`;

export default ButtonBase;
