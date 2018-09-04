import { css, ThemedStyledProps } from 'styled-components';
import { ThemeAttributes } from 'theme/src/types';
// import { variables } from '@kata-kit/theme';

export const InputTextBase = (
  props: ThemedStyledProps<{}, ThemeAttributes>
) => css`
  display: block;
  width: 100%;
  box-sizing: border-box;
  display: block;
  border-radius: 6px;
  background-color: ${props.theme.backgroundColor};
  border: solid 1px ${props.theme.borderColor};
  padding: 8px 16px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0);
  transition: all 0.3s ease;
  outline: none;

  &::placeholder {
    color: ${props.theme.mutedTextColor};
  }

  &:disabled,
  &.disabled {
    background-color: ${props.theme.backgroundColorHover};
    color: ${props.theme.mutedTextColor};
  }

  &:not(:disabled):not(.disabled) {
    &:hover {
      background-color: ${props.theme.backgroundColorHover};
      border-color: ${props.theme.borderColorHover};
    }

    &:active,
    &:focus {
      background-color: ${props.theme.backgroundColorActive};
      border: 1px solid ${props.theme.borderColorHover};
      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.25),
        0 0 0 4px ${props.theme.focusOutlineColor};
    }
  }
`;
