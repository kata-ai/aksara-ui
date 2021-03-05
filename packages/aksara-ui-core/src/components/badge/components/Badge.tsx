import * as React from 'react';

import { Box, BoxProps } from '../../../foundations';
import { useComponentStyles } from '../../../system';

export interface BadgeProps extends Omit<BoxProps, 'size'> {
  /** Additional CSS classes to give to the component. */
  className?: string;
  /** Additional CSS properties to give to the component. */
  style?: React.CSSProperties;
  /** The variant options available for a badge. Defaults to 'entity' */
  variant?: 'default' | 'neutral' | 'info' | 'warning' | 'critical' | 'success';
  /** Size of the badge. Defaults to 'md' */
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
}

/** Badge text for entity, status, etc. */
const Badge: React.ForwardRefRenderFunction<HTMLSpanElement, BadgeProps> = (
  { className, style, variant = 'default', size = 'md', children, sx, ...rest },
  ref
) => {
  const styles = useComponentStyles('badge', { variant, size });

  return (
    <Box as="span" ref={ref} className={className} style={style} sx={{ ...styles, ...sx }} {...rest}>
      {children}
    </Box>
  );
};

Badge.displayName = 'Badge';

export default React.forwardRef(Badge);
