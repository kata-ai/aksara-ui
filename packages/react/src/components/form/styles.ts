import styled from 'styled-components';
import {
  layout,
  position,
  flexbox,
  grid,
  space,
  variant,
  LayoutProps,
  PositionProps,
  FlexboxProps,
  GridProps,
  SpaceProps,
} from 'styled-system';

import { checkboxThemeBase, checkboxThemeChecked, checkboxThemeHover } from './themes/checkbox';
import { theme } from '../../theme';

export interface InputBaseProps extends LayoutProps, PositionProps, FlexboxProps, GridProps, SpaceProps {
  /** True if this text input has an addon style */
  addon?: boolean;
  /** True if the input has errors. */
  inputVariant?: 'base' | 'errors';
}

export type CheckRadioBaseProps = Omit<InputBaseProps, 'inputSize' | 'addon'>;

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
      border: 2px solid ${theme.colors.greylight01};
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

    &:indeterminate {
      --r: 0deg;

      &::after {
        border-right: 0;
        height: 7px;
      }

      ${variant({
        prop: 'inputVariant',
        variants: checkboxThemeChecked,
      })}
    }

    &:disabled {
      background-color: ${theme.colors.greylight02};
      cursor: not-allowed;
      opacity: 0.9;

      &:checked {
        background-color: ${theme.colors.greylight05};
        border-color: ${theme.colors.greylight05};
      }
    }

    &:hover {
      &:not(:checked):not(:indeterminate) {
        &:not(:disabled) {
          ${variant({
            prop: 'inputVariant',
            variants: checkboxThemeHover,
          })}
        }
      }
    }
    &:hover {
      &:not(:disabled) {
        background-color: ${theme.colors.blue08};
      }
    }

    &:focus {
      box-shadow: 0 0 0 2px ${theme.colors.blue03};
    }

    &:after {
      opacity: var(--o, 0);
    }

    &:checked,
    &:indeterminate {
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
    --active: ${theme.colors.grey01};
    --active-inner: ${theme.colors.blue08};
    --border: ${theme.colors.grey04};
    --border-hover: ${theme.colors.grey06};
    --background: ${theme.colors.grey01};
    --disabled: ${theme.colors.grey03};
    --disabled-inner: ${theme.colors.grey05};

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
