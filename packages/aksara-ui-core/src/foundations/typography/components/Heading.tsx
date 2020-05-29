import styled from 'styled-components';
import { variant } from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';

import { HeadingScale } from '../../../Theme';
import { typographyBase, TypographyBaseProps, shouldForwardTextProp } from '../utils';

export interface HeadingProps extends TypographyBaseProps {
  /** Size value of the heading. */
  scale?: HeadingScale;
}

/**
 * Heading component provided as a styled component primitive.
 */
const Heading = styled('h2').withConfig<HeadingProps>({
  shouldForwardProp: prop => shouldForwardProp(prop) && shouldForwardTextProp(prop),
})`
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
