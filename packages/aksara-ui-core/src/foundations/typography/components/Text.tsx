import styled from 'styled-components';
import { ResponsiveValue, Theme, RequiredTheme } from 'styled-system';

import { sfp, pseudoSystemProps, getComponentStyles, allSystemProps, sxMixin, SxProps } from '../../../system';
import { TypographyBaseProps, TextScale, textProps } from '../utils';

export interface TextProps<ThemeType extends Theme = RequiredTheme> extends TypographyBaseProps, SxProps {
  /** Size value of the text. */
  scale?: ResponsiveValue<TextScale, ThemeType>;
}

/**
 * This is a base `Text` element to handle typography elements.
 */
const Text = styled('span').withConfig<TextProps>({
  shouldForwardProp: sfp(textProps),
})(getComponentStyles('text'), allSystemProps, pseudoSystemProps, sxMixin);

Text.displayName = 'Text';

export default Text;
