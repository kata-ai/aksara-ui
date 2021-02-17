import styled from 'styled-components';
import { ResponsiveValue, Theme, RequiredTheme, variant } from 'styled-system';

import {
  sfp,
  pseudoSystemProps,
  allSystemProps,
  AllSystemProps,
  sxMixin,
  SxProps,
  getBaseStyles,
} from '../../../system';
import { textProps } from '../utils';

export type AnchorScale = 900 | 800 | 700 | 600 | 500 | 400 | 300 | 200 | 100;

export interface AnchorProps<ThemeType extends Theme = RequiredTheme>
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    AllSystemProps,
    SxProps {
  color?: string;
  children?: React.ReactNode;
  /** Size value of the heading. */
  scale?: ResponsiveValue<AnchorScale, ThemeType>;
}

/**
 * Link component provided as a styled component primitive.
 */
const Anchor = styled('a').withConfig<AnchorProps>({
  shouldForwardProp: sfp(textProps),
})(
  getBaseStyles('anchor'),
  variant({
    prop: 'scale',
    scale: 'componentStyles.anchor.scales.typeScales',
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
  allSystemProps,
  pseudoSystemProps,
  sxMixin
);

Anchor.displayName = 'Anchor';

export default Anchor;
