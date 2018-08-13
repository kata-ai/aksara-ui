import React from 'react';
import {
  withRouter,
  RouteComponentProps,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Loadable from 'react-loadable';
import styled from 'styled-components';

import {
  Wrapper,
  SidebarAndContent,
  Content,
  Sidebar,
  SidebarMain,
  SidebarMainMenu,
  SidebarSub,
  SidebarSubMenu
} from '@kata-kit/layout';

import Loading from './components/Loading';
import { variables } from '@kata-kit/theme';

const Logo = require('@kata-kit/assets/images/logo-white.svg');

const SidebarSubTitle = styled('h1')`
  margin-bottom: 1.846153846rem /* $space-3 */;
`;

const SidebarSubHeading = styled('h5')`
  margin-top: ${variables.spaces.space2};
  padding: 6px 8px;
`;

const Demo = Loadable({
  loader: () => import('../demo'),
  loading: Loading
});

const Docs = Loadable({
  loader: () => import('../docs'),
  loading: Loading
});

const ComponentLibrary = Loadable({
  loader: () => import('../components'),
  loading: Loading
});

class App extends React.Component<RouteComponentProps<{}>> {
  isSidebarCollapsed() {
    return this.props.location.pathname.search(/docs|components/) === -1;
  }

  render() {
    return (
      <Wrapper>
        <SidebarAndContent>
          <Sidebar collapsed={this.isSidebarCollapsed()}>
            <SidebarMain logo={Logo}>
              <SidebarMainMenu exact to="/" icon="dict">
                Demo
              </SidebarMainMenu>
              <SidebarMainMenu to="/docs" icon="docs">
                Design
              </SidebarMainMenu>
              <SidebarMainMenu to="/components" icon="method">
                Kit
              </SidebarMainMenu>
            </SidebarMain>
            {!this.isSidebarCollapsed() && (
              <SidebarSub
                titleElement={<SidebarSubTitle>Design</SidebarSubTitle>}
              >
                <SidebarSubMenu exact to="/docs">
                  Index
                </SidebarSubMenu>
                <SidebarSubMenu to="/docs/page">Page</SidebarSubMenu>
                <SidebarSubHeading className="text-label">
                  Overview
                </SidebarSubHeading>
                <SidebarSubMenu to="/docs/overview/introduction">
                  Introduction
                </SidebarSubMenu>
                <SidebarSubMenu to="/docs/overview/design-principles">
                  Design Principles
                </SidebarSubMenu>
                <SidebarSubMenu to="/docs/overview/voice-and-tone">
                  Voice and Tone
                </SidebarSubMenu>
                <SidebarSubHeading className="text-label">
                  Foundations
                </SidebarSubHeading>
                <SidebarSubMenu to="/docs/foundations/colour">
                  Colour
                </SidebarSubMenu>
              </SidebarSub>
            )}
          </Sidebar>
          <Content>
            <Switch>
              <Route exact path="/" component={Demo} />
              <Route path="/docs" component={Docs} />
              <Route path="/components" component={ComponentLibrary} />
              <Route render={() => <Redirect to="/" />} />
            </Switch>
          </Content>
        </SidebarAndContent>
      </Wrapper>
    );
  }
}

export default withRouter(App);
