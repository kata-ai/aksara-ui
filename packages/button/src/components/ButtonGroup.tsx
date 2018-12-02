import * as React from 'react';
import styled from 'styled-components';
import ThemedComponent from '@kata-kit/theme';

import themes from '../theme';

interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

export default class ButtonGroup extends React.Component<ButtonGroupProps> {
  render() {
    const { children, ...rest } = this.props;

    return (
      <ThemedComponent themes={themes.button}>
        {themeAttributes => (
          <Root {...rest} {...themeAttributes}>
            {children}
          </Root>
        )}
      </ThemedComponent>
    );
  }
}

const Root = styled('div')`
  border-collapse: collapse;

  button,
  a {
    border-radius: 0;

    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
`;
