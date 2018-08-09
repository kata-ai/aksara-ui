import React from 'react';
import styled from 'styled-components';
import Scrollbars from 'react-custom-scrollbars';

export interface SidebarSubProps {
  collapsed?: boolean;
  titleElement?: React.ReactElement<any> | null;
}

const SidebarSub: React.SFC<SidebarSubProps> = ({
  titleElement,
  collapsed,
  children
}) => (
  <Root collapsed={collapsed}>
    {titleElement && titleElement}
    <Scrollbars>{children}</Scrollbars>
  </Root>
);

export default SidebarSub;

const Root = styled<SidebarSubProps, 'div'>('div')`
  display: ${props => (props.collapsed ? 'none' : 'block')}
  flex: 1 1 auto;
  padding: 1.846153846rem /* $space-3 */ 1.230769231rem /* $space-2 */;
`;
