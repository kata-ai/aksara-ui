import React from 'react';
import styled from 'styled-components';

import theme from '../theme';
import styles from '../styles';
import { variables, ThemedComponent } from '@kata-kit/theme';

export interface BadgeProps {
  color?: 'primary' | 'secondary';
}

export default class Badge extends React.Component<BadgeProps> {
  render() {
    const { children } = this.props;

    return (
      <ThemedComponent props="default" theme={theme}>
        {props => <Root theme={props.theme}>{children}</Root>}
      </ThemedComponent>
    );
  }
}

const Root = styled('span')`
  ${styles}
  border-radius: ${variables.borderRadiuses.borderRadiusXs};
  color: ${props => props.theme.textColor};
  background-color: ${props => props.theme.backgroundColor};
`;
