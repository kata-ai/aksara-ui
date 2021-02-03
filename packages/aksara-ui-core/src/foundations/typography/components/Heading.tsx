import styled from 'styled-components';
import { variant, ResponsiveValue, Theme, RequiredTheme } from 'styled-system';

import { sfp, pseudoSystemProps } from '../../../system';
import { HeadingScale } from '../../../theme';
import { typographyBase, TypographyBaseProps, textProps } from '../utils';

export interface HeadingProps<ThemeType extends Theme = RequiredTheme> extends TypographyBaseProps {
  /** Size value of the heading. */
  scale?: ResponsiveValue<HeadingScale, ThemeType>;
}

/**
 * Heading component provided as a styled component primitive.
 */
const Heading = styled('h2').withConfig<HeadingProps>({
  shouldForwardProp: sfp(textProps),
})(
  variant({
    prop: 'scale',
    scale: 'componentStyles.heading',
    variants: {
      900: {},
      800: {},
      700: {},
      600: {},
      500: {},
      400: {},
      300: {},
      200: {},
      100: {},
    },
  }),
  typographyBase,
  pseudoSystemProps
);

Heading.defaultProps = {
  color: '#121615',
  scale: 800,
};

Heading.displayName = 'Heading';

export default Heading;
