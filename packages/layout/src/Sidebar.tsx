import React from 'react';
import styled from 'styled-components';
import Scrollbars from 'react-custom-scrollbars';

export interface SidebarProps {
  collapsed?: boolean;
}

const Sidebar: React.SFC<SidebarProps> = ({ collapsed, children }) => {
  return (
    <Wrapper collapsed={collapsed}>
      <Inner>
        <Scrollbars>{children}</Scrollbars>
      </Inner>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled<SidebarProps, 'div'>('div')`
  display: table-cell;
  width: ${props => (props.collapsed ? '4.923076923rem' : '280px')};
  background: #fff; /* $white */
  position: relative;
`;

const Inner = styled('div')`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: inherit;
  z-index: 100;
`;
