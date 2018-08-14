import React from 'react';
import { RouteComponentProps } from 'react-router';

interface RouteParams {
  package: string;
}

const ComponentsPage: React.SFC<RouteComponentProps<RouteParams>> = ({
  match
}) => <div>Package {match.params.package}</div>;

export default ComponentsPage;
