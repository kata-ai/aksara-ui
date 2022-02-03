import * as React from 'react';
import { VisuallyHidden } from '@aksara-ui/helpers';
import { avatarSizeOptions } from '../../../theme/component-styles/avatar';
import { Box, BoxProps } from '../../../layout';
import { useComponentStyles } from '../../../system';
import { Text } from '../../../typography';
import getInitials from '../utils/getInitials';
import SignBadge from '../../badge/components/Sign/SignBadge';
import NotificationBadge from '../../badge/components/Notification/NotificationBadge';

type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';
const bgColors = ['indigo06', 'red07', 'yellow07', 'blue07', 'green07'];
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
  size?: AvatarSize;
  /** Presence option */
  presence?: React.ReactNode;
  /** Notification Badge  */
  notificationBadge?: string;
}

function iconSizes(size: AvatarSize = 'lg') {
  return avatarSizeOptions[size] - 8;
}

const initialSizes: Record<AvatarSize, string> = {
  sm: '8px',
  md: '12px',
  lg: '14px',
  xl: '20px',
};
const offsetBadge: Record<AvatarSize, string> = {
  sm: '14px',
  md: '20px',
  lg: '28px',
  xl: '48px',
};

/** Resizable avatar component. */
const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  (
    {
      className,
      style,
      src,
      alt = undefined,
      name,
      size = 'lg',
      color = 'white',
      bg,
      icon,
      presence,
      notificationBadge,
      ...rest
    },
    ref
  ) => {
    const styles = useComponentStyles('avatar', { size: typeof size === 'string' ? size : undefined });

    const renderInitials = () => {
      return (
        <Text fontSize={initialSizes[size]} lineHeight={1} role="presentation">
          {name ? getInitials(name) : '??'}
        </Text>
      );
    };

    const renderImage = () => {
      if (src) {
        return (
          <Box
            as="img"
            sx={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }}
            src={src}
            alt={name || alt}
          />
        );
      }

      if (icon) {
        return React.createElement(icon, { fill: 'currentColor', size: iconSizes(size), 'aria-hidden': true });
      }

      return renderInitials();
    };

    const bgColorsRandomizer = () => {
      if (!name) {
        return 'indigo06';
      }
      const names = name.split(' ');
      let totalValue = 0;
      names.forEach(item => {
        const utfValue = new TextEncoder().encode(`${item[0]}${item[item.length - 1]}`);
        totalValue += utfValue[0] + utfValue[1];
      });
      const indexColor = totalValue % bgColors.length;
      return bgColors[indexColor];
    };

    const renderAvatar = () => {
      return (
        <Box
          data-testid="avatar-container"
          as="span"
          ref={ref}
          className={className}
          style={style}
          color={color}
          bg={bg || bgColorsRandomizer()}
          sx={{ ...styles }}
          width={typeof size === 'number' ? size : undefined}
          height={typeof size === 'number' ? size : undefined}
          borderRadius={9999}
          {...rest}
        >
          {name && <VisuallyHidden>{name}</VisuallyHidden>}
          {renderImage()}
        </Box>
      );
    };
    if (presence || notificationBadge) {
      return (
        <Box position="relative" data-testid="avatar-with-presence">
          {renderAvatar()}
          {presence && (
            <Box position={'absolute'} bottom={0} left={offsetBadge[size]}>
              <SignBadge size={size === 'xl' ? 'lg' : size}>{presence}</SignBadge>
            </Box>
          )}
          {notificationBadge && (
            <Box position={'absolute'} top={0} left={offsetBadge[size]}>
              <NotificationBadge value={notificationBadge} />
            </Box>
          )}
        </Box>
      );
    }
    return renderAvatar();
  }
);

Avatar.displayName = 'Avatar';

export default Avatar;
