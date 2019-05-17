import * as React from 'react';

import { determineFontDimensions } from '../utils';
import { Omit } from '../../../utils/types';
import { TextProps, Text } from './Text';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, Omit<TextProps, 'as'> {}

/**
 * Link component provided as a styled component primitive.
 */
export const Link: React.SFC<LinkProps> = ({ children, size, ...rest }) => {
  return (
    <Text as="a" {...determineFontDimensions('text', size)} {...rest}>
      {children}
    </Text>
  );
};

Link.displayName = 'Link';
