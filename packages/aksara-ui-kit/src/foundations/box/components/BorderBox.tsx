import {
  background,
  BackgroundProps,
  height,
  HeightProps,
  maxWidth,
  MaxWidthProps,
  space as styledSpace,
  SpaceProps,
  borderRadius,
  BorderRadiusProps,
  width,
  WidthProps
} from 'styled-system';

import { Box, BoxProps } from './Box';
import { styledWrapper } from '../../../utils';
import { getColor } from '../../../utils/helpers';
import { Color } from '../../../Theme';

export interface BorderBoxProps
  extends BackgroundProps,
    HeightProps,
    MaxWidthProps,
    SpaceProps,
    BorderRadiusProps,
    WidthProps,
    BoxProps {
  noOverflow?: boolean;
  borderColor?: Color;
}

/**
 * An extended `Box` with additional hooks to set border.
 */
export const BorderBox = styledWrapper(Box)<BorderBoxProps>`
  border: 1px solid ${props => getColor(props.borderColor ? props.borderColor : 'grey02')};
  ${borderRadius};
  ${background};
  ${height};
  ${maxWidth};
  ${styledSpace};
  ${width};
  ${props => props.noOverflow && 'overflow: hidden;'}
`;

BorderBox.displayName = 'BorderBox';
