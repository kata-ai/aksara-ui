import styled from 'styled-components';
import { ResponsiveValue, Theme, RequiredTheme } from 'styled-system';

import {
  sfp,
  pseudoSystemProps,
  getComponentStyles,
  allSystemProps,
  AllSystemProps,
  sxMixin,
  SxProps,
} from '../../../system';
import { textProps } from '../utils';

export type HeadingScale = 900 | 800 | 700 | 600 | 500 | 400 | 300 | 200 | 100;

export interface HeadingProps<ThemeType extends Theme = RequiredTheme> extends AllSystemProps, SxProps {
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
})(getComponentStyles('heading'), allSystemProps, pseudoSystemProps, sxMixin);

Heading.defaultProps = {
  color: '#121615',
  scale: 800,
};

Heading.displayName = 'Heading';

export default Heading;
