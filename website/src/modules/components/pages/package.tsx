import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import universal from 'react-universal-component';

import DocsDashboard from '../../docs/components/DocsDashboard';
import DocsDashboardHeading from '../../docs/components/DocsDashboardHeading';
import DocsDashboardContent from '../../docs/components/DocsDashboardContent';
import Loading from '../../core/components/Loading';

import { PackageMetadata, RootStore } from '../../../types/app';

const generateDocs = (params: RouteParams) =>
  universal(() => import(`@kata-kit/${params.package}/docs/index.mdx`), {
    loading: Loading
  });

interface PropsFromState {
  packagesError?: string;
  packagesList: Record<string, PackageMetadata>;
}

interface RouteParams {
  package: string;
}

type Props = PropsFromState & RouteComponentProps<RouteParams>;

const ComponentsPage: React.SFC<Props> = ({ packagesList, match }) => {
  const metadata = packagesList[match.params.package];
  const Doc = generateDocs(match.params);

  return (
    <DocsDashboard>
      {metadata && <DocsDashboardHeading>{metadata.name}</DocsDashboardHeading>}
      <DocsDashboardContent>
        <Doc />
      </DocsDashboardContent>
    </DocsDashboard>
  );
};

const mapStateToProps = ({ packages }: RootStore) => ({
  packagesError: packages.errors,
  packagesList: packages.list
});

export default connect(mapStateToProps)(ComponentsPage);
