import * as React from 'react';
import styled from 'styled-components';

import { Theme } from '@kata-kit/theme';

export interface DashboardContentHeaderProps {
  /** Additional dashboard content header CSS class. */
  className?: string;
  /** Whether dashboard content header is secondary or not. */
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

const Root = styled('h1')<DashboardContentHeaderProps>`
  margin-top: ${props => (props.isSecondary ? '2.461538462rem' : 0)};
  margin-bottom: 24px;
  color: ${props =>
    props.isSecondary ? '#24282d !important' : '#ffffff !important'};
  font-size: 1.85rem;
  font-weight: 500;
`;
