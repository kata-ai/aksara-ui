import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import Loadable from 'react-loadable';
import styled from 'styled-components';

import DocsDashboard from '../../docs/components/DocsDashboard';
import DocsDashboardHeading from '../../docs/components/DocsDashboardHeading';
import DocsDashboardContent from '../../docs/components/DocsDashboardContent';
import Loading from '../../core/components/Loading';

import { PackageMetadata, RootStore } from '../../../types/app';
import { variables } from '@kata-kit/theme';

const generateDocs = (params: RouteParams) =>
  Loadable({
    loader: () => import(`@kata-kit/${params.package}/docs/index.mdx`),
    loading: Loading,
    render: (loaded, props) => {
      const Component = loaded.default;
      return <Component {...props} />;
    }
  });

interface PropsFromState {
  packagesError?: string;
  packagesList: Record<string, PackageMetadata>;
}

interface RouteParams {
  package: string;
}

type Props = PropsFromState & RouteComponentProps<RouteParams>;

const Hr = styled('hr')`
  margin: ${variables.spaces.space4} 0;
  border: none;
  border-bottom: 1px solid ${variables.colors.gray30};
`;

const DepsBlock = styled('div')`
  h2 {
    font-size: 20px;
    line-height: 30px;
  }
`;

const Dependencies = styled('ul')`
  padding-left: 0;
  list-style-type: none;
`;

const ComponentsPage: React.SFC<Props> = ({ packagesList, match }) => {
  const metadata = packagesList[match.params.package];
  const Doc = generateDocs(match.params);
  const peerDependencyList = metadata.peerDependencies
    ? Object.keys(metadata.peerDependencies).map(d => ({
        name: d,
        version: metadata.peerDependencies![d]
      }))
    : [];

  return (
    <DocsDashboard>
      {metadata && <DocsDashboardHeading>{metadata.name}</DocsDashboardHeading>}
      <DocsDashboardContent>
        {peerDependencyList.length !== 0 && (
          <DepsBlock>
            <h2>Peer Dependencies</h2>
            <Dependencies>
              {peerDependencyList.map(d => (
                <li key={d.name}>
                  <code>{`"${d.name}": "${d.version}"`}</code>
                </li>
              ))}
            </Dependencies>
          </DepsBlock>
        )}
        <Hr />
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
