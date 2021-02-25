import styled from 'styled-components';
import { ResponsiveValue, Theme, RequiredTheme, variant } from 'styled-system';

import { sfp, pseudoSystemProps, allSystemProps, AllSystemProps, sxMixin, SxProps } from '../../../system';
import { textProps } from '../utils';

export type ParagraphScale = 500 | 400 | 300 | 200;

export interface ParagraphProps<ThemeType extends Theme = RequiredTheme> extends AllSystemProps, SxProps {
  color?: string;
  children?: React.ReactNode;
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
    scale: 'componentStyles.paragraph.scales.typeScales',
    variants: {
      500: {},
      400: {},
      300: {},
      200: {},
    },
  }),
  allSystemProps,
  pseudoSystemProps,
  sxMixin
);

Paragraph.defaultProps = {
  scale: 400,
  letterSpacing: '-0.05px',
};

Paragraph.displayName = 'Paragraph';

export default Paragraph;
