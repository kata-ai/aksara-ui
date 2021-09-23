import styled from 'styled-components';
import { ResponsiveValue, Theme, RequiredTheme } from 'styled-system';

import {
  sfp,
  pseudoSystemProps,
  allSystemProps,
  AllSystemProps,
  sxMixin,
  SxProps,
  componentStylesMixin,
  PseudoSystemProps,
} from '../../../system';
import { textProps } from '../../utils';

export type ParagraphScale = 500 | 400 | 300 | 200;

export interface ParagraphProps<ThemeType extends Theme = RequiredTheme>
  extends SxProps,
    AllSystemProps,
    PseudoSystemProps {
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
})(componentStylesMixin('text'), sxMixin, allSystemProps, pseudoSystemProps);

Paragraph.defaultProps = {
  scale: 400,
};

Paragraph.displayName = 'Paragraph';

export default Paragraph;
