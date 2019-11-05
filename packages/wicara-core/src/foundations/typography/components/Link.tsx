import * as React from 'react';

import { determineFontDimensions } from '../utils';
import Text, { TextProps } from './Text';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, TextProps {}

/**
 * Link component provided as a styled component primitive.
 */
const Link: React.SFC<LinkProps> = ({ children, as = 'a', scale = 'body', ...rest }) => {
  return (
    <Text as={as} {...determineFontDimensions(scale)} {...rest}>
      {children}
    </Text>
  );
};

Link.displayName = 'Link';

export default Link;
