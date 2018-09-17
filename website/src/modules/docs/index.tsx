import * as React from 'react';
import universal from 'react-universal-component';

import { RouteComponentProps, Switch, Route } from 'react-router-dom';

import DocsPage from './pages/page';
import DocsReset from '../core/components/DocsReset';
import Loading from '../core/components/Loading';

const DocsHome = universal(() => import('./pages/home'), {
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
