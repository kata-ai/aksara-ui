import * as React from 'react';
import { variant } from 'styled-system';

import { styledWrapper as styled } from '../../../utils/primitives';
import { TextScale } from '../../../Theme';

import Typography, { TypographyProps } from './Typography';

export interface TextProps extends TypographyProps {
  /** Additional CSS classes to add to the component. */
  className?: string;
  /** Additional CSS properties to add to the component. */
  style?: React.CSSProperties;
  /** What HTML element to render the text as. */
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  /** Size value of the text. */
  scale?: TextScale;
}

/**
 * This is a base `Text` element to handle typography elements.
 */
const Text = styled(Typography)<TextProps>`
  ${variant({
    prop: 'scale',
    scale: 'componentStyles.text',
    variants: {
      500: {},
      400: {},
      300: {},
      200: {},
    },
  })}
`;

Text.defaultProps = {
  as: 'span',
  scale: 400,
};

Text.displayName = 'Text';

export default Text;
