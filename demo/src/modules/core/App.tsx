import React from 'react';
import {
  withRouter,
  RouteComponentProps,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
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

import Demo from '../demo';
import Docs from '../docs';
import ComponentLibrary from '../components';

const Logo = require('@kata-kit/assets/images/logo-white.svg');

const SidebarSubTitle = styled('h1')`
  margin-bottom: 1.846153846rem /* $space-3 */;
`;

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
              <SidebarMainMenu exact to="/" icon="bot">
                Demo
              </SidebarMainMenu>
              <SidebarMainMenu to="/docs" icon="docs">
                Docs
              </SidebarMainMenu>
              <SidebarMainMenu to="/components" icon="method">
                Kit
              </SidebarMainMenu>
            </SidebarMain>
            {!this.isSidebarCollapsed() && (
              <SidebarSub
                titleElement={<SidebarSubTitle>Docs</SidebarSubTitle>}
              >
                <SidebarSubMenu exact to="/docs">
                  Index
                </SidebarSubMenu>
                <SidebarSubMenu exact to="/docs/page">
                  Page
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
