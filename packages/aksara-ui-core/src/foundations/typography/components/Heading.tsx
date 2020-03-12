import { variant } from 'styled-system';

import { styledWrapper as styled } from '../../../utils/primitives';

import { HeadingScale } from '../../../Theme';
import { typographyBase, TypographyBaseProps } from '../utils';

export interface HeadingProps extends TypographyBaseProps {
  /** Size value of the heading. */
  scale?: HeadingScale;
}

/**
 * Heading component provided as a styled component primitive.
 */
const Heading = styled('h2')<HeadingProps>`
  ${variant({
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
  })}

  ${typographyBase}
`;

Heading.defaultProps = {
  color: '#121615',
  scale: 800,
};

Heading.displayName = 'Heading';

export default Heading;
