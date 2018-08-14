import React from 'react';
import styled from 'styled-components';
import Scrollbars from 'react-custom-scrollbars';
import { variables } from '@kata-kit/theme';

export interface SidebarSubProps {
  titleElement?: React.ReactElement<any> | null;
}

const SidebarSub: React.SFC<SidebarSubProps> = ({ titleElement, children }) => (
  <Root>
    {titleElement && <SubHeader>{titleElement}</SubHeader>}
    <Scrollbars style={{ flex: '1 1 auto' }}>
      <SubContent>{children}</SubContent>
    </Scrollbars>
  </Root>
);

export default SidebarSub;

const Root = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  position: relative;
`;

const SubHeader = styled('div')`
  padding: ${variables.spaces.space3} ${variables.spaces.space2} 0;
`;

const SubContent = styled('div')`
  padding: 0 ${variables.spaces.space2} ${variables.spaces.space3};
`;
