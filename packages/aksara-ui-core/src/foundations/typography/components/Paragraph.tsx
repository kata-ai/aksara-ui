import * as React from 'react';
import { variant } from 'styled-system';

import { ParagraphScale } from '../../../Theme';
import { styledWrapper as styled } from '../../../utils/primitives';

import Typography, { TypographyProps } from './Typography';

export interface ParagraphProps extends TypographyProps {
  /** Additional CSS classes to add to the component. */
  className?: string;
  /** Additional CSS properties to add to the component. */
  style?: React.CSSProperties;
  /** What HTML element to render the text as. */
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  /** Size value of the text. */
  scale?: ParagraphScale;
}

/**
 * Paragraph component provided as a styled component primitive.
 */
const Paragraph = styled(Typography)<ParagraphProps>`
  ${variant({
    prop: 'scale',
    scale: 'componentStyles.paragraph',
    variants: {
      400: {},
      300: {},
    },
  })}
`;

Paragraph.defaultProps = {
  as: 'p',
  scale: 400,
  letterSpacing: '-0.05px',
};

Paragraph.displayName = 'Paragraph';

export default Paragraph;
