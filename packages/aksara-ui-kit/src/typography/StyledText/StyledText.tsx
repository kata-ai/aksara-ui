import {
  display,
  maxWidth,
  space,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  textAlign,
  verticalAlign,
  ColorProps,
  FontSizeProps,
  FontWeightProps,
  LineHeightProps,
  MaxWidthProps,
  SpaceProps,
  DisplayProps,
  TextAlignProps,
  VerticalAlignProps
} from 'styled-system';

import { styled } from '../../utils/elements';

export interface TypographyProps
  extends DisplayProps,
    MaxWidthProps,
    SpaceProps,
    FontSizeProps,
    FontWeightProps,
    ColorProps,
    LineHeightProps,
    TextAlignProps,
    VerticalAlignProps {}

/**
 * This is a base `Text` element to handle typography elements.
 */
export const StyledText = styled.Text<TypographyProps>`
  ${display};
  ${maxWidth};
  ${space};
  ${fontSize};
  ${fontWeight}
  ${lineHeight};
  ${color};
  ${textAlign};
  ${verticalAlign};
`;

StyledText.displayName = 'StyledText';
