import { allSystemProps, AllSystemProps } from '../../../system';

export interface TypographyBaseProps extends AllSystemProps {
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

export type TextScale = 900 | 800 | 700 | 600 | 500 | 400 | 300 | 200 | 100;
export type ParagraphScale = 400 | 300;
export type HeadingScale = TextScale;

/**
 * This is a base `Text` element to handle typography elements.
 */
const typographyBase = allSystemProps;

export default typographyBase;
