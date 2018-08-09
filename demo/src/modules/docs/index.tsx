import React from 'react';
import { RouteComponentProps, Switch, Route } from 'react-router-dom';

import DocsHome from './pages/home';
import DocsPage from './pages/DocsPage';
import DocsReset from '../core/components/DocsReset';

const Docs: React.SFC<RouteComponentProps<{}>> = ({ match }) => (
  <DocsReset>
    <Switch>
      <Route exact path={`${match.path}`} render={DocsHome} />
      <Route path={`${match.path}/page`} render={DocsPage} />
    </Switch>
  </DocsReset>
);

export default Docs;
