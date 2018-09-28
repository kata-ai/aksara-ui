import * as React from 'react';
import styled from 'styled-components';

interface SidebarAndContentProps {
  hasTop?: boolean;
}

const SidebarAndContent: React.SFC<SidebarAndContentProps> = ({
  hasTop,
  children
}) => <Root hasTop={hasTop}>{children}</Root>;

export default SidebarAndContent;

const Root = styled<SidebarAndContentProps, 'div'>('div')`
  display: flex;
  flex: 1 1 auto;

  padding-top: ${props => (props.hasTop ? '64px' : 0)};
`;
