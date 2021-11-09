import * as React from 'react';
import { Box, BoxProps } from '../../../layout';
import { useComponentStyles } from '../../../system';

export type CardElevation = 1 | 2 | 3 | 4 | 5;

export interface CardProps extends BoxProps, React.ComponentPropsWithoutRef<'div'> {
  /** Additional CSS classes to add to the component. */
  className?: string;
  /** Additional CSS properties to add to the component. */
  style?: React.CSSProperties;
  /**
   * Extended color props. We need this because default `color` prop clashes with `styled-system`.
   */
  color?: string;
  elevation?: CardElevation;
}

/**
 * Renders a card based on the elevation level.
 */
const Card = React.forwardRef<HTMLDivElement, CardProps>(({ children, elevation = 1, ...rest }, ref) => {
  const cardStyles = useComponentStyles('card', { elevation });
  return (
    <Box ref={ref} sx={cardStyles} {...rest}>
      {children}
    </Box>
  );
});

Card.displayName = 'Card';

export default Card;
