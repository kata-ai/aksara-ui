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
}

/** Badge text for entity, status, etc. */
const Badge: React.FC<BadgeProps> = ({ className, style, variant, size, children, sx, ...rest }) => {
  const styles = useComponentStyles('badge', { variant, size });

  return (
    <Box as="span" className={className} style={style} sx={{ ...styles, ...sx }} {...rest}>
      {children}
    </Box>
  );
};

Badge.defaultProps = {
  variant: 'default',
  size: 'md',
  className: undefined,
  style: undefined,
};

Badge.displayName = 'Badge';

export default Badge;
