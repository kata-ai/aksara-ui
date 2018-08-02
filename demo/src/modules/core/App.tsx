import React from 'react';
import {
  withRouter,
  RouteComponentProps,
  Switch,
  Route
} from 'react-router-dom';

import {
  Wrapper,
  Content,
  Sidebar,
  SidebarMain,
  SidebarMainMenu,
  SidebarSub,
  SidebarSubMenu
} from '@kata-kit/layout';

import Demo from '../demo';
import Docs from '../docs';

const Logo = require('@kata-kit/assets/images/logo-white.svg');

class App extends React.Component<RouteComponentProps<{}>> {
  isSidebarCollapsed() {
    return this.props.location.pathname.search(/docs/) === -1;
  }

  render() {
    return (
      <Wrapper>
        <Sidebar collapsed={this.isSidebarCollapsed()}>
          <SidebarMain logo={Logo}>
            <SidebarMainMenu exact to="/" icon="settings">
              Demo
            </SidebarMainMenu>
            <SidebarMainMenu to="/docs" icon="cms">
              Docs
            </SidebarMainMenu>
          </SidebarMain>
          <SidebarSub titleElement={<h1>Sidebar</h1>}>
            <SidebarSubMenu to="/" icon="bot">
              Menu 1
            </SidebarSubMenu>
          </SidebarSub>
        </Sidebar>
        <Content>
          <Switch>
            <Route exact path="/" component={Demo} />
            <Route path="/docs" component={Docs} />
          </Switch>
        </Content>
      </Wrapper>
    );
  }
}

export default withRouter(App);
