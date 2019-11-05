import * as React from 'react';

import { styledWrapper as styled } from '../../../utils/primitives';
import { TypeScale } from '../../../Theme';

import { determineFontDimensions } from '../utils';
import Typography, { TypographyProps } from './Typography';

export interface TextProps extends TypographyProps {
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
 * This is a base `Text` element to handle typography elements.
 */
const StyledText = styled(Typography)<TextProps>`
  ${props => props.scale === 'label' && 'font-weight: 700'}
`;

/**
 * Text component provided as a styled component primitive.
 */
const Text: React.SFC<TextProps> = ({ children, as, scale = 'body', ...rest }) => (
  <StyledText as={as} {...determineFontDimensions(scale)} {...rest}>
    {children}
  </StyledText>
);

Text.defaultProps = {
  as: 'span'
};

Text.displayName = 'Text';

export default Text;
