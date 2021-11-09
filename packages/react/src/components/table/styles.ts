import { css } from 'styled-components';
import {
  layout,
  position,
  flexbox,
  grid,
  space,
  LayoutProps,
  PositionProps,
  FlexboxProps,
  GridProps,
  SpaceProps,
} from 'styled-system';

export type BaseStylesProps = LayoutProps & PositionProps & FlexboxProps & GridProps & SpaceProps;

export const BaseStyles = css`
  ${layout}
  ${position}
  ${flexbox}
  ${grid}
  ${space}
`;
