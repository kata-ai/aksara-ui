import React from 'react';
import { SidebarSub, SidebarSubMenu } from '@kata-kit/layout';
import SidebarSubTitle from '../core/components/SidebarSubTitle';

const ComponentLibrarySidebar = () => (
  <SidebarSub titleElement={<SidebarSubTitle>Components</SidebarSubTitle>}>
    <SidebarSubMenu exact to="/docs">
      Index
    </SidebarSubMenu>
  </SidebarSub>
);

export default ComponentLibrarySidebar;
