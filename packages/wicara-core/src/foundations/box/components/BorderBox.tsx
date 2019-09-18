import { borderRadius, BorderRadiusProps } from 'styled-system';

import { styledWrapper } from '../../../utils/primitives';
import { Color } from '../../../Theme';
import { getColor } from '../../../utils/helpers';

import { Box, BoxProps } from './Box';

export interface BorderBoxProps extends BorderRadiusProps, BoxProps {
  /** Set to `true` to enable `overflow: hidden;`. */
  noOverflow?: boolean;
  /** The color key for the border. */
  borderColor?: Color;
}

/**
 * An extended `Box` with additional hooks to set border.
 */
export const BorderBox = styledWrapper(Box)<BorderBoxProps>`
  border: 1px solid ${props => getColor(props.borderColor || 'gray30')};
  ${borderRadius};
  ${props => props.noOverflow && 'overflow: hidden;'}
`;

BorderBox.displayName = 'BorderBox';
