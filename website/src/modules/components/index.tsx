import * as React from 'react';
import universal from 'react-universal-component';
import { RouteComponentProps, Switch, Route } from 'react-router-dom';

import DocsReset from '../core/components/DocsReset';
import Loading from '../core/components/Loading';

const ComponentsHome = universal(() => import('./pages/home'), {
  loading: Loading
});

const ComponentsPage = universal(() => import('./pages/package'), {
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
