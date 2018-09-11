import React from 'react';
import styled from 'styled-components';

import { Theme } from '@kata-kit/theme';

export interface DashboardContentHeaderProps {
  className?: string;
  isSecondary?: boolean;
}

const DashboardContentHeader: React.SFC<DashboardContentHeaderProps> = ({
  children,
  className,
  isSecondary
}) => (
  <Theme>
    {themeAttributes => (
      <Root
        className={className}
        isSecondary={isSecondary}
        {...themeAttributes}
      >
        {children}
      </Root>
    )}
  </Theme>
);

export default DashboardContentHeader;

const Root = styled<DashboardContentHeaderProps, 'h1'>('h1')`
  margin-top: ${props => (props.isSecondary ? '2.461538462rem' : 0)};
  margin-bottom: 24px;
  color: ${props =>
    props.isSecondary ? '#24282d !important' : '#ffffff !important'};
  font-size: 1.85rem;
  font-weight: 500;
`;
