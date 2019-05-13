import * as React from 'react';

import { determineFontSize, StyledText, TypographyProps } from './StyledText';

interface TextProps extends TypographyProps {
  size: number;
}

export const Text: React.SFC<TextProps> = ({ children, size, ...rest }) => (
  <StyledText {...determineFontSize('text', size)} {...rest}>
    {children}
  </StyledText>
);

Text.displayName = 'Text';
