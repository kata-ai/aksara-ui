import React from 'react';
import { SidebarSub, SidebarSubMenu } from '@kata-kit/layout';
import SidebarSubTitle from '../core/components/SidebarSubTitle';
import SidebarSubHeading from '../core/components/SidebarSubHeading';

const DocsSidebar = () => (
  <SidebarSub titleElement={<SidebarSubTitle>Design</SidebarSubTitle>}>
    <SidebarSubMenu exact to="/docs">
      Index
    </SidebarSubMenu>
    <SidebarSubHeading>Overview</SidebarSubHeading>
    <SidebarSubMenu to="/docs/overview/introduction">
      Introduction
    </SidebarSubMenu>
  </SidebarSub>
);

export default DocsSidebar;
