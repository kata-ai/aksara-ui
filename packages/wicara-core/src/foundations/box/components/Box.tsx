import * as React from 'react';
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
  background,
  BackgroundProps,
  color,
  ColorProps,
  typography,
  TypographyProps
} from 'styled-system';

import { primitives } from '../../../utils/primitives';

export interface BoxProps
  extends LayoutProps,
    PositionProps,
    FlexboxProps,
    GridProps,
    SpaceProps,
    BackgroundProps,
    ColorProps,
    TypographyProps {
  /** Additional CSS classes to add to the component. */
  className?: string;
  /** Additional CSS properties to add to the component. */
  style?: React.CSSProperties;
}

/**
 * Box is a view with all styled-system hooks added to it. You can use it as a
 * base component for all display elements.
 */
const Box = primitives.View<BoxProps>`
  ${layout}
  ${position}
  ${flexbox}
  ${grid}
  ${space}
  ${background}
  ${color}
  ${typography}
`;

Box.displayName = 'Box';

export default Box;
