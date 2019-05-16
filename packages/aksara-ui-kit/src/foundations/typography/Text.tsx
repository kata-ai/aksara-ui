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
import { primitives } from '../../utils/primitives';
import { TextSizes } from '../../Theme';
import { Omit } from '../../utils/types';

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
const StyledText = primitives.Text<TypographyProps>`
  ${display};
  ${maxWidth};
  ${space};
  ${fontSize};
  ${fontWeight}
  ${lineHeight};
  ${color}
  ${textAlign};
  ${verticalAlign};
  letter-spacing: -0.05px;
`;

interface TextProps extends TypographyProps {
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
export const Text: React.SFC<TextProps> = ({ children, as, size, ...rest }) => (
  <StyledText as={as} {...determineFontDimensions('text', size)} {...rest}>
    {children}
  </StyledText>
);

Text.defaultProps = {
  as: 'span',
  color: '#293232',
  size: 300,
  margin: 0
};

Text.displayName = 'Text';

interface LinkProps extends Omit<TextProps, 'as'>, React.AnchorHTMLAttributes<HTMLAnchorElement> {}

/**
 * Link component provided as a styled component primitive.
 */
export const Link: React.SFC<LinkProps> = ({ children, size, ...rest }) => {
  const Component = StyledText.withComponent('a');
  return (
    <Component {...determineFontDimensions('text', size)} {...rest}>
      {children}
    </Component>
  );
};
