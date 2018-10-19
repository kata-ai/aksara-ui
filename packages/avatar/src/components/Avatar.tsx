import * as React from 'react';
import styled, { ThemedStyledProps } from 'styled-components';

import themes from '../theme';
import styles, { AvatarBaseProps } from '../styles';
import ThemedComponent, { ThemeAttributes } from '@kata-kit/theme';

export interface AvatarProps {
  src: any;
  /** Size of the avatar. */
  size?: 24 | 40;
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

const Root = styled<ThemedStyledProps<AvatarBaseProps, ThemeAttributes>, 'div'>(
  'div'
)`
  ${styles};
`;
