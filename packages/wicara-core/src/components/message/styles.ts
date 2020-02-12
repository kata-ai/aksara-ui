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

import { messageVariants, closeButtonVariants } from './variants';

export type MessageStates = keyof typeof messageVariants;

export interface BaseMessageProps extends LayoutProps, PositionProps, FlexboxProps, GridProps, SpaceProps {
  state?: MessageStates;
}

export const BaseMessageStyles = () =>
  css`
    display: flex;
    align-items: center;
    min-height: 38px;
    padding: 12px 16px;
    border: 1px solid transparent;
    border-radius: 4px;
    line-height: 1;
    ${variant({
      prop: 'state',
      variants: messageVariants,
    })}

    ${layout}
    ${position}
    ${flexbox}
    ${grid}
    ${space}
  `;

export const Icon = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  font-size: 16px;
  width: 16px;
  height: 16px;
`;

export const Inner = styled('div')`
  flex: 1;
  margin-right: 16px;
`;

export const CloseButton = styled('button')<BaseMessageProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  ${variant({
    prop: 'state',
    variants: closeButtonVariants,
  })}
  font-size: 13px;
  width: 16px;
  height: 16px;

  &:focus {
    outline: none;

    i {
      outline-offset: 2px;
    }
  }
`;

export const Root = styled('div')<BaseMessageProps>`
  ${BaseMessageStyles}

  ${Icon} {
    i {
      display: inline-block;
      height: 16px;
    }
  }

  ${CloseButton} {
    i {
      display: inline-block;
      height: 13px;
    }
  }
`;
