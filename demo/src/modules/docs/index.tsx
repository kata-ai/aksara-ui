import React, { Fragment } from 'react';
import { RouteComponentProps, Switch, Route } from 'react-router-dom';

import DocsHome from './DocsHome';
import DocsPage from './DocsPage';

const Docs: React.SFC<RouteComponentProps<{}>> = ({ match }) => (
  <Fragment>
    <Switch>
      <Route exact path={`${match.path}`} render={DocsHome} />
      <Route path={`${match.path}/page`} render={DocsPage} />
    </Switch>
  </Fragment>
);

export default Docs;
