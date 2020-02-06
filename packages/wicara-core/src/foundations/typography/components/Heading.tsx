import * as React from 'react';
import { variant } from 'styled-system';

import { styledWrapper as styled } from '../../../utils/primitives';

import Typography, { TypographyProps } from './Typography';
import { HeadingScale } from '../../../Theme';

export interface HeadingProps extends TypographyProps {
  /** Additional CSS classes to add to the component. */
  className?: string;
  /** Additional CSS properties to add to the component. */
  style?: React.CSSProperties;
  /** What HTML element to render the text as. */
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  /** Size value of the heading. */
  scale?: HeadingScale;
}

/**
 * Heading component provided as a styled component primitive.
 */
const Heading = styled(Typography)<HeadingProps>`
  ${variant({
    prop: 'scale',
    scale: 'componentStyles.heading',
    variants: {
      900: {},
      800: {},
      700: {},
      600: {},
      500: {},
      400: {},
      300: {},
      200: {},
      100: {},
    },
  })}
`;

Heading.defaultProps = {
  as: 'h2',
  color: 'gray80',
  scale: 800,
};

Heading.displayName = 'Heading';

export default Heading;
