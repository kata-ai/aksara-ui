import styled from 'styled-components';
import { variant, ResponsiveValue, Theme, RequiredTheme } from 'styled-system';

import { sfp, pseudoSystemProps } from '../../../system';
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
})(
  variant({
    prop: 'scale',
    scale: 'componentStyles.paragraph.scale',
    variants: {
      400: {},
      300: {},
    },
  }),
  typographyBase,
  pseudoSystemProps
);

Paragraph.defaultProps = {
  scale: 400,
  letterSpacing: '-0.05px',
};

Paragraph.displayName = 'Paragraph';

export default Paragraph;
