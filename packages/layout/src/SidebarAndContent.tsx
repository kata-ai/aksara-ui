import React from 'react';
import styled from 'styled-components';

const SidebarAndContent: React.SFC = ({ children }) => <Root>{children}</Root>;

export default SidebarAndContent;

const Root = styled('div')`
  display: table;
  table-layout: fixed;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
