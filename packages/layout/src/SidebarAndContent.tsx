import * as React from 'react';
import styled from 'styled-components';

const SidebarAndContent: React.SFC = ({ children }) => <Root>{children}</Root>;

export default SidebarAndContent;

const Root = styled('div')`
  display: flex;
  flex: 1 1 auto;
`;
