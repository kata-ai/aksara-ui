import * as React from 'react';
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

import { determineFontDimensions } from './utils';
import { styled } from '../utils/elements';
import { TextSizes } from '../Theme';

interface TypographyProps
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
const StyledText = styled.Text<TypographyProps>`
  ${display};
  ${maxWidth};
  ${space};
  ${fontSize};
  ${fontWeight}
  ${lineHeight};
  ${color};
  ${textAlign};
  ${verticalAlign};
  letter-spacing: -0.05px;
`;

interface ParagraphProps extends TypographyProps {
  /** Additional CSS classes to add to the component. */
  className?: string;
  /** Additional CSS properties to add to the component. */
  style?: React.CSSProperties;
  /** What HTML element to render the text as. */
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  /** Size value of the text. */
  size?: keyof TextSizes;
}

/**
 * Text component provided as a styled component primitive.
 */
export const Paragraph: React.SFC<ParagraphProps> = ({ children, size, ...rest }) => (
  <StyledText {...determineFontDimensions('text', size)} {...rest}>
    {children}
  </StyledText>
);

Paragraph.defaultProps = {
  as: 'p',
  size: 300,
  margin: 0
};

Paragraph.displayName = 'Paragraph';
