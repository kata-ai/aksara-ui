import {
  layout,
  LayoutProps,
  space,
  SpaceProps,
  color,
  ColorProps,
  typography,
  TypographyProps
} from 'styled-system';

import { primitives } from '../../../utils/primitives';

export interface TypographyProps extends LayoutProps, SpaceProps, ColorProps, TypographyProps {
  /** Unique ID attribute */
  id?: string;
  /** Extended color props. */
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
