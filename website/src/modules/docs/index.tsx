import React from 'react';
import Loadable from 'react-loadable';
import { RouteComponentProps, Switch, Route } from 'react-router-dom';

import DocsPage from './pages/page';
import DocsReset from '../core/components/DocsReset';
import Loading from '../core/components/Loading';

const DocsHome = Loadable({
  loader: () => import('./pages/home'),
  loading: Loading
});

const Docs: React.SFC<RouteComponentProps<{}>> = ({ match }) => (
  <DocsReset>
    <Switch>
      <Route exact path={`${match.path}`} component={DocsHome} />
      <Route exact path={`${match.path}/:page*`} component={DocsPage} />
    </Switch>
  </DocsReset>
);

export default Docs;
