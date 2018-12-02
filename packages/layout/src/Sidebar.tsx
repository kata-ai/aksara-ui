import * as React from 'react';
import styled from 'styled-components';
import { variables } from '@kata-kit/theme';

export interface SidebarProps {
  collapsed?: boolean;
  hasTop?: boolean;
}

const Sidebar: React.SFC<SidebarProps> = ({ collapsed, hasTop, children }) => {
  return (
    <Wrapper hasTop={hasTop}>
      <Inner collapsed={collapsed}>
        <FixedContainer hasTop={hasTop}>{children}</FixedContainer>
      </Inner>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled('div')`
  position: relative;
  z-index: 2;
`;

const Inner = styled('div')`
  width: ${props => (props.collapsed ? variables.spaces.space8 : '280px')};
`;

const FixedContainer = styled('div')`
  display: flex;
  flex-direction: row;
  height: ${props => (props.hasTop ? 'calc(100vh - 64px)' : '100vh')};
  position: fixed;
  top: ${props => (props.hasTop ? '64px' : 0)};
  left: 0;
  width: inherit;
  z-index: 50;
`;
