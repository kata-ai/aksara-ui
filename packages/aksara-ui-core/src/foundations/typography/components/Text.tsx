import styled from 'styled-components';
import { ResponsiveValue, Theme, RequiredTheme } from 'styled-system';

import { sfp, pseudoSystemProps, getComponentStyles } from '../../../system';
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
})(getComponentStyles('text'), typographyBase, pseudoSystemProps);

Text.displayName = 'Text';

export default Text;
