import * as React from 'react';

import {
  determineFontDimensions,
  StyledText,
  TypographyProps
} from './StyledText';
import { HeadingSizes } from '../Theme';

interface Heading extends TypographyProps {
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
export const Heading: React.SFC<Heading> = ({
  children,
  as,
  size,
  ...rest
}) => (
  <StyledText as={as} {...determineFontDimensions('heading', size)} {...rest}>
    {children}
  </StyledText>
);

Heading.defaultProps = {
  as: 'h2',
  size: 800,
  margin: 0
};

Heading.displayName = 'Heading';
