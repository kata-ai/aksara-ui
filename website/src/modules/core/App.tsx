import React, { Fragment } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import {
  withRouter,
  RouteComponentProps,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import universal from 'react-universal-component';

import {
  Wrapper,
  Topbar,
  SidebarAndContent,
  Content,
  Sidebar,
  SidebarMain,
  SidebarMainMenu
} from '@kata-kit/layout';

import * as sidebar from './sidebar';
import Loading from './components/Loading';
import SidebarLoading from './components/SidebarLoading';

import { RootStore, PackageMetadata } from '../../types/app';
import { populatePackages, populateError } from '../../store/packages/actions';
import Logo from './components/Logo';

const Home = universal(() => import('../home'), {
  loading: Loading
});

const Demo = universal(() => import('../demo'), {
  loading: Loading
});

const Docs = universal(() => import('../docs'), {
  loading: Loading
});

const ComponentLibrary = universal(() => import('../components'), {
  loading: Loading
});

interface PropsFromState {
  packagesError?: string;
  packagesList: Record<string, PackageMetadata>;
}

interface OtherProps {
  dispatch: Dispatch;
}

type Props = PropsFromState & OtherProps & RouteComponentProps<{}>;

class App extends React.Component<Props> {
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
    const DocsSidebar = universal(() => import('../docs/sidebar'), {
      loading: SidebarLoading
    });

    const ComponentLibrarySidebar = universal(
      () => import('../components/sidebar'),
      {
        loading: SidebarLoading
      }
    );

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

  componentDidMount() {
    fetch('/kata-kit-packages.json')
      .then(res => res.json())
      .then(json => this.props.dispatch(populatePackages(json)))
      .catch(err => this.props.dispatch(populateError(err.message)));
  }

  render() {
    const currLoc = this.getCurrentLocation();

    return (
      <Wrapper>
        <Topbar leftContent={<Logo />} />
        <SidebarAndContent hasTop>
          <Sidebar hasTop collapsed={this.isSidebarCollapsed()}>
            <SidebarMain>
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
              <Route exact path="/" component={Home} />
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

const mapStateToProps = ({ packages }: RootStore) => ({
  packagesError: packages.errors,
  packagesList: packages.list
});

export default withRouter(connect(mapStateToProps)(App));
