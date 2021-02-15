import styled from 'styled-components';
import { ResponsiveValue, Theme, RequiredTheme } from 'styled-system';

import { sfp, pseudoSystemProps, getComponentStyles } from '../../../system';
import { typographyBase, TypographyBaseProps, ParagraphScale, textProps } from '../utils';

export interface ParagraphProps<ThemeType extends Theme = RequiredTheme> extends TypographyBaseProps {
  /** Size value of the text. */
  scale?: ResponsiveValue<ParagraphScale, ThemeType>;
}

/**
 * Paragraph component provided as a styled component primitive.
 */
const Paragraph = styled('p').withConfig<ParagraphProps>({
  shouldForwardProp: sfp(textProps),
})(getComponentStyles('paragraph'), typographyBase, pseudoSystemProps);

Paragraph.defaultProps = {
  scale: 400,
  letterSpacing: '-0.05px',
};

Paragraph.displayName = 'Paragraph';

export default Paragraph;
