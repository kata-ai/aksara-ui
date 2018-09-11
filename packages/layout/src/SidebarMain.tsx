import * as React from 'react';
import styled from 'styled-components';
import Scrollbars from 'react-custom-scrollbars';
import { variables } from '@kata-kit/theme';

export interface SidebarMainProps {
  logo: string;
}

const SidebarMain: React.SFC<SidebarMainProps> = ({ logo, children }) => (
  <Root>
    {logo && <Logo src={logo} alt="Kata.ai" />}
    <Scrollbars>{children}</Scrollbars>
  </Root>
);

export default SidebarMain;

const Root = styled('div')`
  width: ${variables.spaces.space8};
  padding: 1.846153846rem /* $space-3 */ 0.615384615rem /* $space-1 */;
  background-color: #24282d /* $gray-80 */;
  color: #676b6d /* $gray-60 */;
  text-align: center;
  user-select: none;

  a {
    color: #676b6d /* $gray-60 */;
  }
`;

const Logo = styled('img')`
  margin-bottom: 1.846153846rem /* $space-3 */;
`;
