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

export const CloseButtonWrapper = styled('div')<BaseMessageProps>`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 16px;
`;

export const Root = styled('div')<BaseMessageProps>`
  ${BaseMessageStyles}
`;
