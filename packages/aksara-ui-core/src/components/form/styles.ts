import styled, { css } from 'styled-components';
import {
  layout,
  LayoutProps,
  position,
  PositionProps,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  space,
  SpaceProps,
  variant,
} from 'styled-system';

import { inputThemeBase, inputThemeHover, inputThemeFocus } from './themes/input';
import { colors, componentStyles } from '../../utils';

export type InputSizes = 40 | 48;

export interface InputBaseProps extends LayoutProps, PositionProps, FlexboxProps, GridProps, SpaceProps {
  /** True if this text input has an addon style */
  addon?: boolean;
  /** True if the input has errors. */
  inputVariant?: 'base' | 'errors';
  /** Form size */
  inputSize?: InputSizes;
}

const WithAddonStyles = css`
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  margin-bottom: 0;

  /* TODO: prepend/append */
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

export const TextAreaBase = styled('textarea')<InputBaseProps>`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 9px 16px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid transparent;
  font-size: ${componentStyles.text[300].fontSize};
  line-height: ${props => props.inputSize}px;
  outline: none;

  ${variant({
    prop: 'inputVariant',
    variants: inputThemeBase,
  })}

  &::placeholder {
    color: ${colors.grey06};
  }

  &:disabled,
  &.disabled {
    background-color: ${colors.grey03};
    color: ${colors.grey06};
    border-color: ${colors.grey04};
  }

  &:not(:disabled):not(.disabled) {
    &:hover, &.hover {
      ${variant({
        prop: 'inputVariant',
        variants: inputThemeHover,
      })}
    }

    &:active, &.active,
    &:focus, &.focus {
      ${variant({
        prop: 'inputVariant',
        variants: inputThemeFocus,
      })}
    }
  }

  ${layout}
  ${position}
  ${flexbox}
  ${grid}
  ${space}
`;

export const InputBase = styled('input')<InputBaseProps>`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 9px 16px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid transparent;
  font-size: ${componentStyles.text[300].fontSize};
  line-height: ${props => props.inputSize}px;
  outline: none;
  height: ${props => props.inputSize}px;

  ${props => props.addon && WithAddonStyles};

  ${variant({
    prop: 'inputVariant',
    variants: inputThemeBase,
  })}

  &::placeholder {
    color: ${colors.grey06};
  }

  &:disabled,
  &.disabled {
    background-color: ${colors.grey03};
    color: ${colors.grey06};
    border-color: ${colors.grey04};
  }

  &:not(:disabled):not(.disabled) {
    &:hover, &.hover {
      ${variant({
        prop: 'inputVariant',
        variants: inputThemeHover,
      })}
    }

    &:active, &.active,
    &:focus, &.focus {
      ${variant({
        prop: 'inputVariant',
        variants: inputThemeFocus,
      })}
    }
  }

  ${layout}
  ${position}
  ${flexbox}
  ${grid}
  ${space}
`;

export const CheckboxBase = styled('input')<Omit<InputBaseProps, 'inputSize' | 'addon'>>`
  @supports (-webkit-appearance: none) or (-moz-appearance: none) {
    --active: ${colors.blue08};
    --active-inner: ${colors.grey01};
    --focus: 2px ${colors.blue06};
    --border: ${colors.grey04};
    --border-hover: ${colors.grey06};
    --background: ${colors.grey01};
    --disabled: ${colors.grey03};
    --disabled-inner: ${colors.grey05};

    display: inline-block;
    position: relative;
    vertical-align: top;
    width: 16px;
    height: 16px;
    margin: 0;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;
    border: 1px solid var(--bc, var(--border));
    border-radius: 2px;
    background: var(--b, var(--background));

    &::after {
      content: '';
      display: block;
      left: 0;
      top: 0;
      position: absolute;
    }

    &::after {
      width: 6px;
      height: 10px;
      border: 2px solid var(--active-inner);
      border-top: 0;
      border-left: 0;
      left: 4px;
      top: 1px;
      transform: rotate(var(--r, 20deg));
    }

    &:checked {
      --r: 43deg;
      --b: var(--active);
      --bc: var(--active);
    }

    &:disabled {
      --b: var(--disabled);
      cursor: not-allowed;
      opacity: 0.9;

      &:checked {
        --b: var(--disabled-inner);
        --bc: var(--border);
      }
    }

    &:hover {
      &:not(:checked) {
        &:not(:disabled) {
          --bc: var(--border-hover);
        }
      }
    }

    &:focus {
      box-shadow: 0 0 0 var(--focus);
    }

    &:after {
      opacity: var(--o, 0);
    }

    &:checked {
      --o: 1;
    }
  }
`;

export const RadioBase = styled('input')<Omit<InputBaseProps, 'inputSize' | 'addon'>>`
  @supports (-webkit-appearance: none) or (-moz-appearance: none) {
    --active: ${colors.grey01};
    --active-inner: ${colors.blue08};
    --focus: 2px ${colors.blue06};
    --border: ${colors.grey04};
    --border-hover: ${colors.grey06};
    --background: ${colors.grey01};
    --disabled: ${colors.grey03};
    --disabled-inner: ${colors.grey05};

    display: inline-block;
    position: relative;
    vertical-align: top;
    width: 16px;
    height: 16px;
    margin: 0;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;
    border: 1px solid var(--bc, var(--border));
    border-radius: 50%;
    background: var(--b, var(--background));

    &::after {
      content: '';
      display: block;
      left: 0;
      top: 0;
      position: absolute;
    }

    &::after {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--active-inner);
      opacity: 0;
      top: 3px;
      left: 3px;
    }

    &:checked {
      --b: var(--active);
      --bc: var(--active-inner);
    }

    &:disabled {
      --b: var(--disabled);
      cursor: not-allowed;
      opacity: 0.9;

      &:checked {
        --b: var(--disabled-inner);
        --bc: var(--border);
      }
    }

    &:hover {
      &:not(:checked) {
        &:not(:disabled) {
          --bc: var(--border-hover);
        }
      }
    }

    &:focus {
      border-color: var(--active-inner);
    }

    &:after {
      opacity: var(--o, 0);
    }

    &:checked {
      --o: 1;
    }
  }
`;
