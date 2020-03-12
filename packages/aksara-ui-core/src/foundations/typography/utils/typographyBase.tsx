import { css } from 'styled-components';
import {
  layout,
  LayoutProps,
  space,
  SpaceProps,
  color,
  ColorProps,
  typography,
  TypographyProps as StyledTypographyProps,
} from 'styled-system';

export interface TypographyBaseProps extends LayoutProps, SpaceProps, ColorProps, StyledTypographyProps {
  /** Additional CSS classes to add to the component. */
  className?: string;
  /** Additional CSS properties to add to the component. */
  style?: React.CSSProperties;
  /** What HTML element to render the text as. */
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  /**
   * Extended color props. We need this because default `color` prop clashes with `styled-system`.
   */
  color?: string;
}

/**
 * This is a base `Text` element to handle typography elements.
 */
const typographyBase = css`
  ${layout}
  ${space}
  ${color}
  ${typography}
`;

export default typographyBase;
