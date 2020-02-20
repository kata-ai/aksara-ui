import * as React from 'react';
import styled from 'styled-components';

import { AvatarBase, AvatarBaseProps } from '../styles';

export interface AvatarProps extends AvatarBaseProps {
  /** The avatar's image source. */
  src: any;
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
const Avatar: React.FC<AvatarProps> = ({ src, size, type, className, style, alt, ...rest }) => {
  return (
    <Root className={className} style={style} size={size} type={type} {...rest}>
      <img src={src} alt={alt} />
    </Root>
  );
};

Avatar.defaultProps = {
  size: 40,
  alt: '',
  type: 'rounded',
};

Avatar.displayName = 'Avatar';

export default Avatar;
