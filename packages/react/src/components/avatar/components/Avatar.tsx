import * as React from 'react';
import { avatarSizeOptions } from '../../../theme/component-styles/avatar';
import { VisuallyHidden } from '../../../helpers';
import { Box, BoxProps } from '../../../layout';
import { useComponentStyles } from '../../../system';
import { Text } from '../../../typography';
import getInitials from '../utils/getInitials';
import Presence, { PresenceProps } from './Presence';

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
  presence?: PresenceProps;
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

/** Resizable avatar component. */
const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  (
    { className, style, src, alt = undefined, name, size = 'lg', color = 'white', bg, icon, presence, ...rest },
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

    const renderPresence = (option: PresenceProps) => {
      return <Presence {...option} size={size} />;
    };

    const bgColorsRandomizer = () => {
      if (!name) {
        return 'indigo06';
      }
      const names = name.split(' ');
      let totalValue = 0;
      names.forEach(item => {
        totalValue += new TextEncoder().encode(item[0])[0];
      });
      const indexColor = totalValue % bgColors.length;
      return bgColors[indexColor];
    };

    const renderAvatar = () => {
      return (
        <Box
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
    if (presence) {
      return (
        <Box position="relative" data-testid="avatar-with-presence">
          {renderAvatar()}
          {renderPresence(presence)}
        </Box>
      );
    }
    return renderAvatar();
  }
);

Avatar.displayName = 'Avatar';

export default Avatar;
