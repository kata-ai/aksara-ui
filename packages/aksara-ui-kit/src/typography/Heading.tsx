import * as React from 'react';

import { determineFontSize, StyledText, TypographyProps } from './StyledText';

interface Heading extends TypographyProps {
  size: number;
}

export const Heading: React.SFC<Heading> = ({ children, size, ...rest }) => (
  <StyledText {...determineFontSize('heading', size)} {...rest}>
    {children}
  </StyledText>
);

Heading.displayName = 'Heading';
