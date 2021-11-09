import styled from 'styled-components';
import { ResponsiveValue, Theme, RequiredTheme } from 'styled-system';

import {
  sfp,
  pseudoSystemProps,
  allSystemProps,
  AllSystemProps,
  sxMixin,
  SxProps,
  componentStylesMixin,
  PseudoSystemProps,
} from '../../../system';
import { textProps } from '../../utils';

export type HeadingScale = 900 | 800 | 700 | 600 | 500 | 400 | 300 | 200 | 100;

export interface HeadingProps<ThemeType extends Theme = RequiredTheme>
  extends SxProps,
    AllSystemProps,
    PseudoSystemProps {
  color?: string;
  children?: React.ReactNode;
  /** Size value of the heading. */
  scale?: ResponsiveValue<HeadingScale, ThemeType>;
}

/**
 * Heading component provided as a styled component primitive.
 */
const Heading = styled('h2').withConfig<HeadingProps>({
  shouldForwardProp: sfp(textProps),
})(componentStylesMixin('heading'), sxMixin, allSystemProps, pseudoSystemProps);

Heading.defaultProps = {
  scale: 800,
};

Heading.displayName = 'Heading';

export default Heading;
