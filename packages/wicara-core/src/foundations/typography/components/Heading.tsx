import * as React from 'react';

import { styledWrapper as styled } from '../../../utils/primitives';

import { determineFontDimensions } from '../utils';
import Typography, { TypographyProps } from './Typography';
import { TypeScale } from '../../../Theme';

export interface HeadingProps extends TypographyProps {
  /** Additional CSS classes to add to the component. */
  className?: string;
  /** Additional CSS properties to add to the component. */
  style?: React.CSSProperties;
  /** What HTML element to render the text as. */
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  /** Size value of the heading. */
  scale?: TypeScale;
}

/**
 * This is a base `Text` element to handle typography elements.
 */
const StyledText = styled(Typography)<HeadingProps>``;

/**
 * Heading component provided as a styled component primitive.
 */
const Heading: React.SFC<HeadingProps> = ({ children, as, scale = 'heading2', color, ...rest }) => (
  <StyledText
    as={as}
    color={scale === 'label' ? 'gray50' : color}
    {...determineFontDimensions(scale)}
    scale={scale}
    {...rest}
  >
    {children}
  </StyledText>
);

Heading.defaultProps = {
  as: 'h2',
  color: 'gray80',
  fontWeight: 500
};

Heading.displayName = 'Heading';

export default Heading;
