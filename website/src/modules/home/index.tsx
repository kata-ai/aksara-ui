import React from 'react';
import { RouteComponentProps, Switch, Route } from 'react-router-dom';

import HomePage from './pages/home';
import HomepageReset from './components/HomepageReset';

const ComponentLibrary: React.SFC<RouteComponentProps<{}>> = ({ match }) => (
  <HomepageReset>
    <Switch>
      <Route exact path={`${match.path}`} render={HomePage} />
    </Switch>
  </HomepageReset>
);

export default ComponentLibrary;
