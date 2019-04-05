import * as React from 'react';
import styled from 'styled-components';

import styles from '../styles';

export interface AvatarProps {
  src: any;
  /** Size of the avatar. */
  size?: number;
  /** Additional CSS classes to give to the component. */
  className?: string;
  /** Additional CSS styles to give to the component. */
  style?: React.CSSProperties;
}

const Avatar: React.SFC<AvatarProps> = ({ className, style, size, src }) => (
  <Root className={className} style={style} size={size}>
    <img src={src} />
  </Root>
);

Avatar.defaultProps = {
  size: 40,
  className: undefined,
  style: undefined
};

export default Avatar;

const Root = styled('div')`
  ${styles};
`;
