import * as React from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { themeProps } from '../../../Theme';
import Text, { TextProps } from './Text';

export interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, TextProps {}

const AnchorRoot = Text.withComponent('a');

/**
 * Link component provided as a styled component primitive.
 */
const Anchor = styled(AnchorRoot)<AnchorProps>`
  color: ${themeGet('colors.link', themeProps.colors.link)};

  &:hover,
  &:focus {
    color: ${themeGet('colors.link-hover', themeProps.colors['link-hover'])};
    text-decoration: underline;
  }
`;

Anchor.displayName = 'Anchor';

export default Anchor;
