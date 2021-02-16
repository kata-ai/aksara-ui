import * as React from 'react';
import styled from 'styled-components';

import { sfp, pseudoSystemProps, getComponentStyles } from '../../../system';
import { typographyBase, textProps } from '../utils';
import { TextProps } from './Text';

export interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, TextProps {}

/**
 * Link component provided as a styled component primitive.
 */
const Anchor = styled('a').withConfig<AnchorProps>({
  shouldForwardProp: sfp(textProps),
})(getComponentStyles('anchor'), typographyBase, pseudoSystemProps);

Anchor.displayName = 'Anchor';

export default Anchor;
