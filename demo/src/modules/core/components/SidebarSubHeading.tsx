import React from 'react';
import styled from 'styled-components';

import { Theme, ThemeAttributes, variables } from '@kata-kit/theme';
import themes from '../theme';

interface Props {
  className?: string;
}

const SidebarSubHeading: React.SFC<Props> = ({ children, className }) => (
  <Theme values={themes.sidebarSubHeading}>
    {themeAttributes => (
      <H5 className={className} {...themeAttributes}>
        {children}
      </H5>
    )}
  </Theme>
);

export default SidebarSubHeading;

const H5 = styled<ThemeAttributes, 'h5'>('h5')`
  margin-top: ${variables.spaces.space2};
  padding: 6px 8px;
  color: ${props => props.mutedTextColor} !important;
`;
