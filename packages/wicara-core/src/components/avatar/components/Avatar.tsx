import * as React from 'react';
import styled from 'styled-components';

import { AvatarBase } from '../styles';

export interface AvatarProps {
  /** The avatar's image source. */
  src: any;
  /** Size of the avatar. */
  size?: number;
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
const Avatar: React.FC<AvatarProps> = ({ src, size, className, style, alt }) => {
  return (
    <Root className={className} style={style} size={size}>
      <img src={src} alt={alt} />
    </Root>
  );
};

Avatar.defaultProps = {
  size: 40,
  alt: '',
};

Avatar.displayName = 'Avatar';

export default Avatar;
