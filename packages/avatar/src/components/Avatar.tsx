import * as React from 'react';
import styled from 'styled-components';

import themes from '../theme';
import styles from '../styles';
import ThemedComponent from '@kata-kit/theme';

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
      <ThemedComponent themes={themes}>
        {themeAttributes => (
          <Root
            className={className}
            style={style}
            theme={themeAttributes}
            size={size}
          >
            <Image src={src} />
          </Root>
        )}
      </ThemedComponent>
    );
  }
}

const Image = styled('img')``;

const Root = styled('div')`
  ${styles};
`;
