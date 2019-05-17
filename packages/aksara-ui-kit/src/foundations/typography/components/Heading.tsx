import * as React from 'react';

import { Typography, TypographyProps } from './Typography';
import { determineFontDimensions } from '../utils';
import { styledWrapper as styled } from '../../../utils/primitives';
import { HeadingSizes } from '../../../Theme';

/**
 * This is a base `Text` element to handle typography elements.
 */
const StyledText = styled(Typography)`
  letter-spacing: -0.24px;
`;

export interface HeadingProps extends TypographyProps {
  /** Additional CSS classes to add to the component. */
  className?: string;
  /** Additional CSS properties to add to the component. */
  style?: React.CSSProperties;
  /** What HTML element to render the text as. */
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  /** Size value of the heading. */
  size?: keyof HeadingSizes;
}

/**
 * Heading component provided as a styled component primitive.
 */
export const Heading: React.SFC<HeadingProps> = ({ children, as, size, ...rest }) => (
  <StyledText as={as} {...determineFontDimensions('heading', size)} {...rest}>
    {children}
  </StyledText>
);

Heading.defaultProps = {
  as: 'h2',
  color: '#2b2f33',
  size: 800,
  margin: 0
};

Heading.displayName = 'Heading';
