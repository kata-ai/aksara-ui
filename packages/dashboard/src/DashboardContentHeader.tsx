import React from 'react';
import styled from 'styled-components';

export interface DashboardContentHeaderProps {
  className?: string;
  isSecondary?: boolean;
}

const DashboardContentHeader: React.SFC<DashboardContentHeaderProps> = ({
  children,
  className,
  isSecondary
}) => (
  <Root className={className} isSecondary={isSecondary}>
    {children}
  </Root>
);

export default DashboardContentHeader;

const Root = styled<DashboardContentHeaderProps, 'h1'>('h1')`
  margin-top: ${props => (props.isSecondary ? '2.461538462rem' : 0)};
  margin-bottom: 24px;
  color: ${props => (props.isSecondary ? '#24282d' : '#ffffff')};
  font-size: 1.85rem;
  font-weight: 500;
`;
