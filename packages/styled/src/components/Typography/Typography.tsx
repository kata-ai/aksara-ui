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

export const Typography = styled.Text<TypographyProps>`
  ${display};
  ${maxWidth};
  ${space};
  ${fontSize};
  ${lineHeight};
  ${color};
  ${textAlign};
  ${verticalAlign};
`;

export const Heading1 = Typography.withComponent('h1');
export const Heading2 = Typography.withComponent('h2');
export const Heading3 = Typography.withComponent('h3');
export const Heading4 = Typography.withComponent('h4');
export const Heading5 = Typography.withComponent('h5');
export const Heading6 = Typography.withComponent('h6');
