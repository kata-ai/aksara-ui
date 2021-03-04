import styled from 'styled-components';
import { ResponsiveValue, Theme, RequiredTheme, variant } from 'styled-system';

import { sfp, pseudoSystemProps, allSystemProps, AllSystemProps, sxMixin, SxProps } from '../../../system';
import { textProps } from '../utils';

export type TextScale = 900 | 800 | 700 | 600 | 500 | 400 | 300 | 200 | 100;

export interface TextProps<ThemeType extends Theme = RequiredTheme> extends AllSystemProps, SxProps {
  color?: string;
  children?: React.ReactNode;
  /** Size value of the text. */
  scale?: ResponsiveValue<TextScale, ThemeType>;
}

/**
 * This is a base `Text` element to handle typography elements.
 */
const Text = styled('span').withConfig<TextProps>({
  shouldForwardProp: sfp(textProps),
})(
  variant({
    prop: 'scale',
    scale: 'variants.text',
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

Text.displayName = 'Text';

export default Text;
