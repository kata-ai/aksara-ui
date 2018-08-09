import React from 'react';
import styled from 'styled-components';

export interface SidebarSubProps {
  titleElement?: React.ReactElement<any> | null;
}

const SidebarSub: React.SFC<SidebarSubProps> = ({ titleElement, children }) => (
  <Root>
    {titleElement && titleElement}
    {children}
  </Root>
);

export default SidebarSub;

const Root = styled('div')`
  margin-left: 4.923076923rem /* $space-8 */;
  padding: 1.846153846rem /* $space-3 */ 1.230769231rem /* $space-2 */;
`;
