// TODO: *actually load the doc files of each package.

import React from 'react';
import { RouteComponentProps } from 'react-router';
import Loadable from 'react-loadable';

import DocsDashboard from '../../docs/components/DocsDashboard';
import DocsDashboardHeading from '../../docs/components/DocsDashboardHeading';
import DocsDashboardContent from '../../docs/components/DocsDashboardContent';
import Loading from '../../core/components/Loading';

const generateDocs = (params: RouteParams) =>
  Loadable({
    loader: () => import(`@kata-kit/${params.package}/docs/index.mdx`),
    loading: Loading,
    render: (loaded, props) => {
      const Component = loaded.default;
      return <Component {...props} />;
    }
  });

interface RouteParams {
  package: string;
}

const ComponentsPage: React.SFC<RouteComponentProps<RouteParams>> = ({
  match
}) => {
  const Doc = generateDocs(match.params);

  return (
    <DocsDashboard>
      <DocsDashboardHeading>{match.params.package}</DocsDashboardHeading>
      <DocsDashboardContent>
        <Doc />
      </DocsDashboardContent>
    </DocsDashboard>
  );
};

export default ComponentsPage;
