import styled from 'styled-components';
import { ResponsiveValue, Theme, RequiredTheme } from 'styled-system';

import { sfp, pseudoSystemProps, getComponentStyles, allSystemProps, sxMixin, SxProps } from '../../../system';
import { TypographyBaseProps, ParagraphScale, textProps } from '../utils';

export interface ParagraphProps<ThemeType extends Theme = RequiredTheme> extends TypographyBaseProps, SxProps {
  /** Size value of the text. */
  scale?: ResponsiveValue<ParagraphScale, ThemeType>;
}

/**
 * Paragraph component provided as a styled component primitive.
 */
const Paragraph = styled('p').withConfig<ParagraphProps>({
  shouldForwardProp: sfp(textProps),
})(getComponentStyles('paragraph'), allSystemProps, pseudoSystemProps, sxMixin);

Paragraph.defaultProps = {
  scale: 400,
  letterSpacing: '-0.05px',
};

Paragraph.displayName = 'Paragraph';

export default Paragraph;
