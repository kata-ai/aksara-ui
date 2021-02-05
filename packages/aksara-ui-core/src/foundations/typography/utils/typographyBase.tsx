import { allSystemProps, AllSystemProps } from '../../../system';
import { ComponentStyles } from '../../../theme';

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

export type TextScale = keyof ComponentStyles['text']['scale'];
export type ParagraphScale = keyof ComponentStyles['paragraph']['scale'];
export type HeadingScale = keyof ComponentStyles['heading']['scale'];

/**
 * This is a base `Text` element to handle typography elements.
 */
const typographyBase = allSystemProps;

export default typographyBase;
