import styled from 'styled-components';
import { ResponsiveValue, Theme, RequiredTheme } from 'styled-system';

import { sfp, pseudoSystemProps, getComponentStyles, allSystemProps, sxMixin, SxProps } from '../../../system';
import { TypographyBaseProps, HeadingScale, textProps } from '../utils';

export interface HeadingProps<ThemeType extends Theme = RequiredTheme> extends TypographyBaseProps, SxProps {
  /** Size value of the heading. */
  scale?: ResponsiveValue<HeadingScale, ThemeType>;
}

/**
 * Heading component provided as a styled component primitive.
 */
const Heading = styled('h2').withConfig<HeadingProps>({
  shouldForwardProp: sfp(textProps),
})(getComponentStyles('heading'), allSystemProps, pseudoSystemProps, sxMixin);

Heading.defaultProps = {
  color: '#121615',
  scale: 800,
};

Heading.displayName = 'Heading';

export default Heading;
