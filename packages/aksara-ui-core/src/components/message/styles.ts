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

import { messageVariants } from './variants';

export type MessageStates = keyof typeof messageVariants;

export interface BaseMessageProps extends LayoutProps, PositionProps, FlexboxProps, GridProps, SpaceProps {
  state?: MessageStates;
}

export const BaseMessageStyles = () =>
  css`
    display: flex;
    min-height: 38px;
    border-radius: 4px;
    line-height: 1;
    overflow: hidden;
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
  align-items: flex-start;
  justify-content: center;
  padding: 16px 0 16px 16px;
  font-size: 16px;
`;

export const Inner = styled('div')`
  flex: 1;
  padding: 16px;
`;

export const CloseButton = styled('button')<BaseMessageProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 13px;

  &:focus {
    outline: none;
  }
`;

export const Root = styled('div')<BaseMessageProps>`
  ${BaseMessageStyles}
`;
