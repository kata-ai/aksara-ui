import * as React from 'react';
import { render } from 'react-testing-library';

import 'jest-dom/extend-expect';
import 'jest-styled-components';
import { Wrapper, Topbar, SidebarSub } from '..';
import SidebarAndContent from '../SidebarAndContent';
import Sidebar from '../Sidebar';
import SidebarMain from '../SidebarMain';
import Content from '../Content';

describe('Layout', () => {
  test('renders correctly', () => {
    const { container } = render(
      <Wrapper>
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
      </Wrapper>
    );

    expect(container.firstChild).toBeInTheDocument();
  });
});
