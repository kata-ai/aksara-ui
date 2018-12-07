import * as React from 'react';
import { render } from 'react-testing-library';

import 'jest-dom/extend-expect';
import 'jest-styled-components';
import { AppRoot, Topbar, SidebarSub } from '..';
import SidebarAndContent from '../components/SidebarAndContent';
import Sidebar from '../components/Sidebar';
import SidebarMain from '../components/SidebarMain';
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
            <SidebarMain>Menu</SidebarMain>
            <SidebarSub titleElement={<h2>SidebarSubTitle</h2>}>
              SidebarSubContent
            </SidebarSub>
          </Sidebar>
          <Content>Content</Content>
        </SidebarAndContent>
      </AppRoot>
    );

    expect(container.firstChild).toBeInTheDocument();
  });
});
