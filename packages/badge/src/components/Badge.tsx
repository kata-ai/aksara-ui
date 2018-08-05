import React from 'react';
import styled from 'styled-components';

import theme from '../theme';
import { variables, ThemedComponent } from '@kata-kit/theme';

interface BadgeProps {
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
  display: inline-block;
  padding: 2px 4px;
  font-size: 11px;
  font-weight: 700;
  line-height: 1.45;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: ${variables.borderRadiuses.borderRadiusXs};
  color: ${props => props.theme.textColor};
  background-color: ${props => props.theme.backgroundColor};
`;
