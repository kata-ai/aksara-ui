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

export type TextScale = 500 | 400 | 300 | 200;

export interface TextProps<ThemeType extends Theme = RequiredTheme> extends SxProps, AllSystemProps, PseudoSystemProps {
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
})(componentStylesMixin('text'), sxMixin, allSystemProps, pseudoSystemProps);

Text.displayName = 'Text';

export default Text;
