import * as React from 'react';
import { render } from 'react-testing-library';

import 'jest-dom/extend-expect';
import 'jest-styled-components';
import { AppRoot, Topbar, SidebarSub } from '..';
import SidebarAndContent from '../components/SidebarAndContent';
import Sidebar from '../components/Sidebar';
import SidebarMain from '../components/SidebarMain';
import SidebarMainMenu from '../components/SidebarMainMenu';
import SidebarSubMenu from '../components/SidebarSubMenu';
import Content from '../components/Content';

describe('Layout', () => {
  test('renders correctly', () => {
    const { container } = render(
      <AppRoot>
        <Topbar
          leftContent={
            <div style={{ width: '64px', textAlign: 'center' }}>Logo</div>
          }
        />
        <SidebarAndContent hasTop>
          <Sidebar hasTop>
            <SidebarMain>
              <SidebarMainMenu icon="bot">Menu</SidebarMainMenu>
              <SidebarMainMenu icon="bot">Menu</SidebarMainMenu>
              <SidebarMainMenu icon="bot">Menu</SidebarMainMenu>
            </SidebarMain>
            <SidebarSub titleElement={<h2>SidebarSubTitle</h2>}>
              <SidebarSubMenu icon="bot">SubMenu</SidebarSubMenu>
              <SidebarSubMenu icon="bot">SubMenu</SidebarSubMenu>
              <SidebarSubMenu icon="bot">SubMenu</SidebarSubMenu>
            </SidebarSub>
          </Sidebar>
          <Content>Content</Content>
        </SidebarAndContent>
      </AppRoot>
    );

    expect(container.firstChild).toBeInTheDocument();
  });

  test('renders correctly (with menu as NavLink)', () => {
    const { container } = render(
      <AppRoot>
        <Topbar
          leftContent={
            <div style={{ width: '64px', textAlign: 'center' }}>Logo</div>
          }
        />
        <SidebarAndContent hasTop>
          <Sidebar hasTop>
            <SidebarMain>
              <SidebarMainMenu asNavLink icon="bot">
                Menu
              </SidebarMainMenu>
              <SidebarMainMenu asNavLink icon="bot">
                Menu
              </SidebarMainMenu>
              <SidebarMainMenu asNavLink icon="bot">
                Menu
              </SidebarMainMenu>
            </SidebarMain>
            <SidebarSub titleElement={<h2>SidebarSubTitle</h2>}>
              <SidebarSubMenu asNavLink icon="bot">
                SubMenu
              </SidebarSubMenu>
              <SidebarSubMenu asNavLink icon="bot">
                SubMenu
              </SidebarSubMenu>
              <SidebarSubMenu asNavLink icon="bot">
                SubMenu
              </SidebarSubMenu>
            </SidebarSub>
          </Sidebar>
          <Content>Content</Content>
        </SidebarAndContent>
      </AppRoot>
    );

    expect(container.firstChild).toBeInTheDocument();
  });
});
