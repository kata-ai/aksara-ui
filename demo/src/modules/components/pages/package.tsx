// TODO: *actually load the doc files of each package.

import React from 'react';
import { RouteComponentProps } from 'react-router';

import Doc from '@kata-kit/button/docs/index.mdx';
import DocsDashboard from '../../docs/components/DocsDashboard';
import DocsDashboardHeading from '../../docs/components/DocsDashboardHeading';
import DocsDashboardContent from '../../docs/components/DocsDashboardContent';

interface RouteParams {
  package: string;
}

const ComponentsPage: React.SFC<RouteComponentProps<RouteParams>> = ({
  match
}) => (
  <DocsDashboard>
    <DocsDashboardHeading>@kata-kit/button</DocsDashboardHeading>
    <DocsDashboardContent>
      <Doc />
    </DocsDashboardContent>
  </DocsDashboard>
);

export default ComponentsPage;
