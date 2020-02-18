import { css } from 'styled-components';

import inputThemes from './themes/input';
import labelThemes from './themes/label';
import { typeScale } from '../../utils';

export interface InputBaseProps {
  /** True if the input has errors. */
  errors?: boolean;
}

export const LabelBase = ({ errors }: InputBaseProps) => {
  const theme = labelThemes[errors ? 'error' : 'defaultTheme'];

  return css`
    display: block;
    margin-bottom: 4px;
    font-size: 12px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: 0.2px;
    text-align: left;
    color: ${theme.textColor};
  `;
};

export const InputBase = ({ errors }: InputBaseProps) => {
  const theme = inputThemes[errors ? 'error' : 'defaultTheme'];

  return css`
    display: block;
    width: 100%;
    padding: 8px 16px;
    box-sizing: border-box;
    border-radius: 6px;
    background-color: ${theme.backgroundColor};
    border: 1px solid ${theme.borderColor};
    font-size: ${typeScale.body.fontSize}px;
    line-height: ${typeScale.body.lineHeight}px;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0);
    transition: all 0.3s ease;
    outline: none;

    &::placeholder {
      color: ${theme.mutedTextColor};
    }

    &:disabled,
    &.disabled {
      background-color: ${theme.backgroundColorHover};
      color: ${theme.mutedTextColor};
    }

    &:not(:disabled):not(.disabled) {
      &:hover {
        background-color: ${theme.backgroundColorHover};
        border-color: ${theme.borderColorHover};
      }

      &:active,
      &:focus {
        background-color: ${theme.backgroundColorActive};
        border: 1px solid ${theme.borderColorHover};
        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.25), 0 0 0 4px ${theme.focusOutlineColor};
      }
    }
  `;
};
