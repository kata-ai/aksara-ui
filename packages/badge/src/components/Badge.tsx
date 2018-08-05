import React from 'react';
import styled from 'styled-components';

import themes from '../theme';
import styles from '../styles';
import { variables, ThemeAttributes, Theme } from '@kata-kit/theme';

export type BadgeColors =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger';

export interface BadgeProps {
  color?: BadgeColors;
}

export default class Badge extends React.Component<BadgeProps> {
  render() {
    const { children, color } = this.props;

    return (
      <Theme values={color && themes[color] ? themes[color] : themes.default}>
        {themeAttributes => <Root {...themeAttributes}>{children}</Root>}
      </Theme>
    );
  }
}

const Root = styled<ThemeAttributes, 'span'>('span')`
  ${styles}
  border-radius: ${variables.borderRadiuses.borderRadiusXs};
  color: ${props => props.textColor};
  background-color: ${props => props.backgroundColor};
`;
