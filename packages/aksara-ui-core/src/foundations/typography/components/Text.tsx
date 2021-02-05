import styled from 'styled-components';
import { variant, ResponsiveValue, Theme, RequiredTheme } from 'styled-system';

import { sfp, pseudoSystemProps } from '../../../system';
import { typographyBase, TypographyBaseProps, TextScale, textProps } from '../utils';

export interface TextProps<ThemeType extends Theme = RequiredTheme> extends TypographyBaseProps {
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
    scale: 'componentStyles.text.scale',
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

Text.displayName = 'Text';

export default Text;
