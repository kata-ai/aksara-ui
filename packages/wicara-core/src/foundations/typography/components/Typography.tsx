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

import { primitives } from '../../../utils/primitives';

export interface TypographyProps
  extends LayoutProps,
    SpaceProps,
    ColorProps,
    StyledTypographyProps {
  /**
   * Extended color props. We need this because default `color` prop clashes with `styled-system`.
   */
  color?: string;
}

/**
 * This is a base `Text` element to handle typography elements.
 */
const Typography = primitives.Text<TypographyProps>`
  ${layout}
  ${space}
  ${color}
  ${typography}
`;

Typography.displayName = 'Typography';

export default Typography;
