import styled from 'styled-components';
import { ResponsiveValue, Theme, RequiredTheme } from 'styled-system';

import { sfp, pseudoSystemProps, getComponentStyles, allSystemProps, sxMixin, SxProps } from '../../../system';
import { textProps, TextScale, TypographyBaseProps } from '../utils';

export interface AnchorProps<ThemeType extends Theme = RequiredTheme>
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    TypographyBaseProps,
    SxProps {
  /** Size value of the heading. */
  scale?: ResponsiveValue<TextScale, ThemeType>;
}

/**
 * Link component provided as a styled component primitive.
 */
const Anchor = styled('a').withConfig<AnchorProps>({
  shouldForwardProp: sfp(textProps),
})(getComponentStyles('anchor'), allSystemProps, pseudoSystemProps, sxMixin);

Anchor.displayName = 'Anchor';

export default Anchor;
