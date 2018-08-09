import React from 'react';
import styled from 'styled-components';

export interface SidebarProps {
  collapsed?: boolean;
}

const Sidebar: React.SFC<SidebarProps> = ({ collapsed, children }) => {
  return (
    <Wrapper collapsed={collapsed}>
      <Inner>{children}</Inner>
    </Wrapper>
  );
};

export default Sidebar;

const Inner = styled('div')`
  display: flex;
  flex-direction: row;
  z-index: 100;
`;

const Wrapper = styled<SidebarProps, 'div'>('div')`
  flex: 0 0 ${props => (props.collapsed ? '4.923076923rem' : '280px')};
  background: #fff; /* $white */
  position: relative;
  overflow-y: hidden;

  ${Inner} {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: ${props => (props.collapsed ? '4.923076923rem' : '280px')};
  }
`;
