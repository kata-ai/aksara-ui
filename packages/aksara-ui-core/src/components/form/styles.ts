import styled, { css } from 'styled-components';
import { layout, position, flexbox, grid, space, variant } from 'styled-system';

import { inputThemeBase, inputThemeHover, inputThemeFocus } from './themes/input';
import { colors, componentStyles } from '../../utils';
import { InputBaseProps, CheckRadioBaseProps } from './types';
import { checkboxThemeBase, checkboxThemeChecked, checkboxThemeHover } from './themes/checkbox';

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
    cursor: not-allowed;
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
    cursor: not-allowed;
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

export const CheckboxBase = styled('input')<CheckRadioBaseProps>`
  @supports (-webkit-appearance: none) or (-moz-appearance: none) {
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
    border: 1px solid transparent;
    border-radius: 2px;

    ${variant({
      prop: 'inputVariant',
      variants: checkboxThemeBase,
    })}

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 1px;
      left: 4px;
      width: 6px;
      height: 10px;
      border: 2px solid ${colors.grey01};
      border-top: 0;
      border-left: 0;
      transform: rotate(var(--r, 20deg));
    }

    &:checked {
      --r: 43deg;

      ${variant({
        prop: 'inputVariant',
        variants: checkboxThemeChecked,
      })}
    }

    &:disabled {
      background-color: ${colors.grey03};
      cursor: not-allowed;
      opacity: 0.9;

      &:checked {
        background-color:${colors.grey05};
        border-color: ${colors.grey04};
      }
    }

    &:hover {
      &:not(:checked) {
        &:not(:disabled) {
          ${variant({
            prop: 'inputVariant',
            variants: checkboxThemeHover,
          })}
        }
      }
    }

    &:focus {
      box-shadow: 0 0 0 2px ${colors.blue06};
    }

    &:after {
      opacity: var(--o, 0);
    }

    &:checked {
      --o: 1;
    }
  }

  ${layout}
  ${position}
  ${flexbox}
  ${grid}
  ${space}
`;

export const RadioBase = styled('input')<CheckRadioBaseProps>`
  @supports (-webkit-appearance: none) or (-moz-appearance: none) {
    --active: ${colors.grey01};
    --active-inner: ${colors.blue08};
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
      position: absolute;
      top: 3px;
      left: 3px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--active-inner);
      opacity: 0;
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

  ${layout}
  ${position}
  ${flexbox}
  ${grid}
  ${space}
`;
