import * as React from 'react';

import { Box, BoxProps } from '../../../layout';
import { useComponentStyles } from '../../../system';
import { Text } from '../../../typography';

export interface BadgeProps extends Omit<BoxProps, 'size'> {
  /** Additional CSS classes to give to the component. */
  className?: string;
  /** Additional CSS properties to give to the component. */
  style?: React.CSSProperties;
  /** The variant options available for a badge. Defaults to 'default' */
  variant?: 'default' | 'info' | 'warning' | 'critical' | 'success' | 'active';
  /** Size of the badge. Defaults to 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** The icon that renders with the badge */
  icon?: React.ComponentType<any>;
  children?: React.ReactNode;
}

/** Badge text for entity, status, etc. */
const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, style, variant = 'default', size = 'md', icon, children, sx, ...rest }, ref) => {
    const styles = useComponentStyles('badge', { variant, size });

    const renderInner = () => {
      if (icon) {
        return (
          <>
            {React.createElement(icon, { fill: 'currentColor', size: 14, 'aria-hidden': true })}
            <Text scale={200} ml="xxs">
              {children}
            </Text>
          </>
        );
      }

      return children;
    };

    return (
      <Box as={icon ? 'div' : 'span'} ref={ref} className={className} style={style} sx={{ ...styles, ...sx }} {...rest}>
        {renderInner()}
      </Box>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;
