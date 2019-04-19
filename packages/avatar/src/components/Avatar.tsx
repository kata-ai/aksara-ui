import * as React from 'react';
import styled from 'styled-components';

import { AvatarBase } from '../styles';
import themes from '../theme';

export interface AvatarProps {
  src: any;
  /** Size of the avatar. */
  size?: number;
  /** Additional CSS classes to give to the component. */
  className?: string;
  /** Additional CSS styles to give to the component. */
  style?: React.CSSProperties;
}

export default class Avatar extends React.Component<AvatarProps> {
  static defaultProps = {
    size: 40
  };

  render() {
    const { src, size, className, style } = this.props;

    return (
      <Root
        className={className}
        style={style}
        theme={themes['defaultTheme']}
        size={size}
      >
        <Image src={src} />
      </Root>
    );
  }
}

const Image = styled('img')``;

const Root = styled('div')`
  ${AvatarBase};
`;
