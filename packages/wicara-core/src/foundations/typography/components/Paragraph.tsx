import * as React from 'react';

import { TypeScale } from '../../../Theme';
import { styledWrapper as styled } from '../../../utils/primitives';

import { determineFontDimensions } from '../utils';
import { Typography, TypographyProps } from './Typography';

/**
 * This is a base `Text` element to handle typography elements.
 */
const StyledText = styled(Typography)`
  letter-spacing: -0.05px;
`;

export interface ParagraphProps extends TypographyProps {
  /** Additional CSS classes to add to the component. */
  className?: string;
  /** Additional CSS properties to add to the component. */
  style?: React.CSSProperties;
  /** What HTML element to render the text as. */
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  /** Size value of the text. */
  scale?: TypeScale;
}

/**
 * Paragraph component provided as a styled component primitive.
 */
export const Paragraph: React.SFC<ParagraphProps> = ({
  children,
  as,
  scale = 'paragraph',
  ...rest
}) => (
  <StyledText as={as} {...determineFontDimensions(scale)} {...rest}>
    {children}
  </StyledText>
);

Paragraph.defaultProps = {
  as: 'p',
  color: 'grey07',
  fontWeight: 300
};

Paragraph.displayName = 'Paragraph';
