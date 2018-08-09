import React from 'react';
import styled from 'styled-components';

import { variables } from '@kata-kit/theme';

export interface SidebarMainProps {
  logo: string;
}

const SidebarMain: React.SFC<SidebarMainProps> = ({ logo, children }) => (
  <Root>
    <Logo src={logo} alt="Kata.ai" />
    {children}
  </Root>
);

export default SidebarMain;

const Root = styled('div')`
  padding: ${variables.spaces.space3} ${variables.spaces.space1};
  flex: 0 0 ${variables.spaces.space8};
  height: 100%;
  min-height: 100vh;
  background-color: #24282d /* $gray-80 */;
  color: #676b6d /* $gray-60 */;
  text-align: center;
  position: relative;
  user-select: none;
  z-index: 1;

  a {
    color: #676b6d /* $gray-60 */;
  }
`;

const Logo = styled('img')`
  margin-bottom: 1.846153846rem /* $space-3 */;
`;
