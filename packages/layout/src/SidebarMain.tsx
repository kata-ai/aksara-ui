import React from 'react';
import styled from 'styled-components';

export interface SidebarMainProps {
  logo: string;
}

const SidebarMain: React.SFC<SidebarMainProps> = ({ logo, children }) => (
  <Root>
    {logo && <Logo src={logo} alt="Kata.ai" />}
    {children}
  </Root>
);

export default SidebarMain;

const Root = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 1.846153846rem /* $space-3 */ 0.615384615rem /* $space-1 */;
  width: 4.923076923rem /* $space-8 */;
  background-color: #24282d /* $gray-80 */;
  color: #676b6d /* $gray-60 */;
  text-align: center;
  position: fixed;
  top: 0;
  bottom: 0;
  user-select: none;
  z-index: 1;

  a {
    color: #676b6d /* $gray-60 */;
  }
`;

const Logo = styled('img')`
  margin-bottom: 1.846153846rem /* $space-3 */;
`;
