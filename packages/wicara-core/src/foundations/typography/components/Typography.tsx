import * as React from 'react';
import styled from 'styled-components';
import {
  layout,
  LayoutProps,
  space,
  SpaceProps,
  color,
  ColorProps,
  typography,
  TypographyProps as StyledTypographyProps
} from 'styled-system';

export interface TypographyProps
  extends LayoutProps,
    SpaceProps,
    ColorProps,
    StyledTypographyProps {
  /** Unique ID attribute */
  id?: string;
  /** Additional CSS classes to add to the component. */
  className?: string;
  /** Additional CSS properties to add to the component. */
  style?: React.CSSProperties;
  /** Extended color props. */
  color?: string;
}

/**
 * This is a base `Text` element to handle typography elements.
 */
const Typography = styled('div')<TypographyProps>`
  ${layout}
  ${space}
  ${color}
  ${typography}
`;

Typography.displayName = 'Typography';

export default Typography;
