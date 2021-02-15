import styled from 'styled-components';
import { ResponsiveValue, Theme, RequiredTheme } from 'styled-system';

import { sfp, pseudoSystemProps, getComponentStyles } from '../../../system';
import { typographyBase, TypographyBaseProps, HeadingScale, textProps } from '../utils';

export interface HeadingProps<ThemeType extends Theme = RequiredTheme> extends TypographyBaseProps {
  /** Size value of the heading. */
  scale?: ResponsiveValue<HeadingScale, ThemeType>;
}

/**
 * Heading component provided as a styled component primitive.
 */
const Heading = styled('h2').withConfig<HeadingProps>({
  shouldForwardProp: sfp(textProps),
})(getComponentStyles('heading'), typographyBase, pseudoSystemProps);

Heading.defaultProps = {
  color: '#121615',
  scale: 800,
};

Heading.displayName = 'Heading';

export default Heading;
