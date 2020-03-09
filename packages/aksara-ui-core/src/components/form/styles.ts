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
    &:hover {
      ${variant({
        prop: 'inputVariant',
        variants: inputThemeHover,
      })}
    }

    &:active,
    &:focus {
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
    &:hover {
      ${variant({
        prop: 'inputVariant',
        variants: inputThemeHover,
      })}
    }

    &:active,
    &:focus {
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
