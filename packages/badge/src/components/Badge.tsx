import React from 'react';
import styled from 'styled-components';

import theme from '../theme';
import { defaultTheme } from '@kata-kit/theme';

interface BadgeProps {
  color?: 'primary' | 'secondary';
}

export default class Badge extends React.Component<BadgeProps> {
  render() {
    const { children } = this.props;

    return <Root>{children}</Root>;
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
  border-radius: ${defaultTheme.borderRadiuses.borderRadiusXs};
  color: ${theme.textColor};
  background-color: ${theme.backgroundColor};
`;
