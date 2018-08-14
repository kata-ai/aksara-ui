import React from 'react';
import Loadable from 'react-loadable';
import { RouteComponentProps, Switch, Route } from 'react-router-dom';

import DocsReset from '../core/components/DocsReset';
import Loading from '../core/components/Loading';

const ComponentsHome = Loadable({
  loader: () => import('./pages/home'),
  loading: Loading
});

const ComponentsPage = Loadable({
  loader: () => import('./pages/package'),
  loading: Loading
});

const ComponentLibrary: React.SFC<RouteComponentProps<{}>> = ({ match }) => (
  <DocsReset>
    <Switch>
      <Route exact path={`${match.path}`} component={ComponentsHome} />
      <Route exact path={`${match.path}/:package`} component={ComponentsPage} />
    </Switch>
  </DocsReset>
);

export default ComponentLibrary;
