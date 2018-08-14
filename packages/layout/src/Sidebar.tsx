import React from 'react';
import styled from 'styled-components';
import { variables } from '@kata-kit/theme';

export interface SidebarProps {
  collapsed?: boolean;
}

const Sidebar: React.SFC<SidebarProps> = ({ collapsed, children }) => {
  return (
    <Wrapper>
      <Inner collapsed={collapsed}>
        <FixedContainer>{children}</FixedContainer>
      </Inner>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled<SidebarProps, 'div'>('div')`
  background: #fff; /* $white */
  position: relative;
  z-index: 2;
`;

const Inner = styled<SidebarProps, 'div'>('div')`
  width: ${props => (props.collapsed ? variables.spaces.space8 : '280px')};
`;

const FixedContainer = styled('div')`
  display: flex;
  flex-direction: row;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: inherit;
  z-index: 50;
`;
