import * as React from 'react';

import { Typography, TypographyProps } from './Typography';
import { determineFontDimensions } from '../utils';
import { styledWrapper as styled } from '../../../utils/primitives';
import { TextSizes } from '../../../Theme';

/**
 * This is a base `Text` element to handle typography elements.
 */
const StyledText = styled(Typography)`
  letter-spacing: -0.05px;
`;

export interface TextProps extends TypographyProps {
  /** Additional CSS classes to add to the component. */
  className?: string;
  /** Additional CSS properties to add to the component. */
  style?: React.CSSProperties;
  /** What HTML element to render the text as. */
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  /** Size value of the text. */
  size?: keyof TextSizes;
}

/**
 * Text component provided as a styled component primitive.
 */
export const Text: React.SFC<TextProps> = ({ children, as, size, ...rest }) => (
  <StyledText as={as} {...determineFontDimensions('text', size)} {...rest}>
    {children}
  </StyledText>
);

Text.defaultProps = {
  as: 'span',
  size: 300,
  margin: 0
};

Text.displayName = 'Text';
