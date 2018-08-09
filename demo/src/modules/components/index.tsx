import React from 'react';
import { RouteComponentProps, Switch, Route } from 'react-router-dom';

import DocsHome from './pages/home';
import DocsReset from '../core/components/DocsReset';

const ComponentLibrary: React.SFC<RouteComponentProps<{}>> = ({ match }) => (
  <DocsReset>
    <Switch>
      <Route exact path={`${match.path}`} render={DocsHome} />
    </Switch>
  </DocsReset>
);

export default ComponentLibrary;
