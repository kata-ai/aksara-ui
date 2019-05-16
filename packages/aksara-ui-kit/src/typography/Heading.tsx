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
import { HeadingSizes } from '../Theme';

interface TypographyProps
  extends DisplayProps,
    MaxWidthProps,
    SpaceProps,
    FontSizeProps,
    FontWeightProps,
    LineHeightProps,
    TextAlignProps,
    VerticalAlignProps {
  /** Extended color props. */
  color?: string;
}

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
  letter-spacing: -0.24px;
`;

interface Heading extends TypographyProps {
  /** Additional CSS classes to add to the component. */
  className?: string;
  /** Additional CSS properties to add to the component. */
  style?: React.CSSProperties;
  /** What HTML element to render the text as. */
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  /** Size value of the heading. */
  size?: keyof HeadingSizes;
}

/**
 * Heading component provided as a styled component primitive.
 */
export const Heading: React.SFC<Heading> = ({ children, as, size, ...rest }) => (
  <StyledText as={as} {...determineFontDimensions('heading', size)} {...rest}>
    {children}
  </StyledText>
);

Heading.defaultProps = {
  as: 'h2',
  color: '#2b2f33',
  size: 800,
  margin: 0
};

Heading.displayName = 'Heading';
