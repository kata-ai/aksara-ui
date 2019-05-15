import * as React from 'react';

import {
  determineFontDimensions,
  StyledText,
  TypographyProps
} from './StyledText';
import { TextSizes } from '../Theme';

interface TextProps extends TypographyProps {
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
export const Text: React.SFC<TextProps> = ({ children, size, ...rest }) => (
  <StyledText {...determineFontDimensions('text', size)} {...rest}>
    {children}
  </StyledText>
);

Text.defaultProps = {
  as: 'p',
  size: 300,
  margin: 0
};

Text.displayName = 'Text';
