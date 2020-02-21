import * as React from 'react';
import styled from 'styled-components';
import { IconUser, IconAudience } from '@aksara-ui/icons';

import { AvatarBase, AvatarBaseProps } from '../styles';
import { Text } from '../../../foundations';
import getInitials from '../utils/getInitials';

export interface AvatarProps extends AvatarBaseProps {
  /** The avatar's image source. */
  src?: any;
  /** Additional CSS classes to give to the component. */
  className?: string;
  /** Alt text for the avatar */
  alt?: string;
  /** Additional CSS styles to give to the component. */
  style?: React.CSSProperties;
}

const Root = styled('div')`
  ${AvatarBase};
`;

/** Resizable avatar component. */
const Avatar: React.FC<AvatarProps> = ({ src, size, shape, className, style, alt, name, type, ...rest }) => {
  const renderAvatarIcon = () => {
    return type === 'user' ? <IconUser fill="currentColor" /> : <IconAudience fill="currentColor" />;
  };

  const renderInitials = () => {
    if (size === 24 || src || !name) {
      return null;
    }

    return <Text scale={300}>{getInitials(name)}</Text>;
  };

  const renderImage = () => {
    if (src) {
      return <img src={src} alt={alt} />;
    }

    if (!name) {
      return renderAvatarIcon();
    }

    return null;
  };

  return (
    <Root className={className} style={style} size={size} shape={shape} {...rest}>
      {renderInitials()}
      {renderImage()}
    </Root>
  );
};

Avatar.defaultProps = {
  size: 40,
  alt: '',
  color: 'indigo',
  type: 'user',
  shape: 'rounded',
};

Avatar.displayName = 'Avatar';

export default Avatar;
