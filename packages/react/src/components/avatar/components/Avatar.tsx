import * as React from 'react';

import { Box, BoxProps, Text } from '../../../layout';
import { useComponentStyles } from '../../../system';
import getInitials from '../utils/getInitials';

export interface AvatarProps extends Omit<BoxProps, 'size'> {
  /** Additional CSS classes to give to the component. */
  className?: string;
  /** Additional CSS styles to give to the component. */
  style?: React.CSSProperties;
  /** Name for initials */
  name?: string;
  /** The avatar's image source. */
  src?: any;
  /** Alt text for the avatar. */
  alt?: string;
  /** The background color of the avatar. */
  bg?: string;
  /** The icon that renders with the avatar. */
  icon?: React.ComponentType<any>;
  /** Size of the avatar. */
  size?: 24 | 32 | 40;
}

function iconSizes(size: AvatarProps['size'] = 40) {
  switch (size) {
    case 24: {
      return 12;
    }
    case 32: {
      return 16;
    }
    case 40: {
      return 20;
    }
    default: {
      return 20;
    }
  }
}

/** Resizable avatar component. */
const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  ({ className, style, src, alt = '', name, size = 40, color = 'white', bg = 'indigo05', icon, ...rest }, ref) => {
    const styles = useComponentStyles('avatar', { size });

    const renderInitials = () => {
      return <Text scale={300}>{name ? getInitials(name) : '??'}</Text>;
    };

    const renderImage = () => {
      if (src) {
        return (
          <Box
            as="img"
            sx={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }}
            src={src}
            alt={alt}
          />
        );
      }

      if (icon) {
        return React.createElement(icon, { fill: 'currentColor', size: iconSizes(size), 'aria-hidden': true });
      }

      return renderInitials();
    };

    return (
      <Box as="span" ref={ref} className={className} style={style} color={color} bg={bg} sx={{ ...styles }} {...rest}>
        {renderImage()}
      </Box>
    );
  }
);

Avatar.displayName = 'Avatar';

export default Avatar;
