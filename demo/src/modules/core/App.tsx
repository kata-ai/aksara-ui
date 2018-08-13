import React, { Fragment } from 'react';
import {
  withRouter,
  RouteComponentProps,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Loadable from 'react-loadable';

import {
  Wrapper,
  SidebarAndContent,
  Content,
  Sidebar,
  SidebarMain,
  SidebarMainMenu
} from '@kata-kit/layout';

import Loading from './components/Loading';
import * as sidebar from './sidebar';
import SidebarLoading from './components/SidebarLoading';

const Logo = require('@kata-kit/assets/images/logo-white.svg');

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

  getCurrentLocation() {
    const locations =
      this.props.location && this.props.location.pathname
        ? this.props.location.pathname.split('/')
        : [];
    return locations.length > 1 ? locations[1] : undefined;
  }

  getSidebarSub(location: string) {
    const DocsSidebar = Loadable({
      loader: () => import('../docs/sidebar'),
      loading: SidebarLoading
    });

    const ComponentLibrarySidebar = Loadable({
      loader: () => import('../components/sidebar'),
      loading: SidebarLoading
    });

    switch (location) {
      case 'docs': {
        return <DocsSidebar />;
      }
      case 'components': {
        return <ComponentLibrarySidebar />;
      }
      default: {
        return null;
      }
    }
  }

  render() {
    const currLoc = this.getCurrentLocation();

    return (
      <Wrapper>
        <SidebarAndContent>
          <Sidebar collapsed={this.isSidebarCollapsed()}>
            <SidebarMain logo={Logo}>
              {Object.keys(sidebar.menus).map(menu => (
                <Fragment key={menu}>
                  <SidebarMainMenu
                    exact={sidebar.menus[menu].isExact}
                    to={sidebar.menus[menu].path}
                    icon={sidebar.menus[menu].icon}
                  >
                    {sidebar.menus[menu].title}
                  </SidebarMainMenu>
                </Fragment>
              ))}
            </SidebarMain>
            {!this.isSidebarCollapsed() && (
              <Fragment>
                {currLoc ? this.getSidebarSub(currLoc) : null}
              </Fragment>
            )}
          </Sidebar>
          <Content>
            <Switch>
              <Route exact path="/" component={Demo} />
              <Route path="/docs" component={Docs} />
              <Route path="/components" component={ComponentLibrary} />
              <Route path="/demo" component={Demo} />
              <Route render={() => <Redirect to="/" />} />
            </Switch>
          </Content>
        </SidebarAndContent>
      </Wrapper>
    );
  }
}

export default withRouter(App);
