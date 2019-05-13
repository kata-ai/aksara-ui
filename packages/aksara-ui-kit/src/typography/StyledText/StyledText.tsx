import * as React from 'react';
import {
  display,
  maxWidth,
  space,
  fontSize,
  lineHeight,
  color,
  textAlign,
  verticalAlign,
  ColorProps,
  FontSizeProps,
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
    ColorProps,
    LineHeightProps,
    TextAlignProps,
    VerticalAlignProps {
  /** Additional CSS classes to add to the component. */
  className?: string;
  /** Additional CSS properties to add to the component. */
  style?: React.CSSProperties;
}

/**
 * This is a base `Text` element to handle typography elements.
 */
export const StyledText = styled.Text<TypographyProps>`
  ${display};
  ${maxWidth};
  ${space};
  ${fontSize};
  ${lineHeight};
  ${color};
  ${textAlign};
  ${verticalAlign};
`;

StyledText.displayName = 'StyledText';
