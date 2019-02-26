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

export const Text = styled.Text<TypographyProps>`
  ${display};
  ${maxWidth};
  ${space};
  ${fontSize};
  ${lineHeight};
  ${color};
  ${textAlign};
  ${verticalAlign};
`;

Text.displayName = 'Text';

export const Heading1 = Text.withComponent('h1');
export const Heading2 = Text.withComponent('h2');
export const Heading3 = Text.withComponent('h3');
export const Heading4 = Text.withComponent('h4');
export const Heading5 = Text.withComponent('h5');
export const Heading6 = Text.withComponent('h6');
export const Paragraph = Text.withComponent('p');
