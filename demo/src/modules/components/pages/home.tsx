import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import DocsDashboard from '../../docs/components/DocsDashboard';
import DocsDashboardHeading from '../../docs/components/DocsDashboardHeading';
import DocsDashboardContent from '../../docs/components/DocsDashboardContent';

import { PackageMetadata, RootStore } from '../../../types/app';
import { EmptyMessage } from '@kata-kit/common';
import { RouteComponentProps } from 'react-router';

interface PropsFromState {
  packagesError?: string;
  packagesList: Record<string, PackageMetadata>;
}

type Props = PropsFromState & RouteComponentProps<{}>;

const ComponentsHome: React.SFC<Props> = ({ packagesList, match }) => (
  <DocsDashboard>
    <DocsDashboardHeading>Components</DocsDashboardHeading>
    <DocsDashboardContent>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Version</th>
          </tr>
        </thead>
        <tbody>
          {packagesList ? (
            Object.keys(packagesList).map(p => (
              <tr key={p}>
                <td>
                  <Link to={`${match.path}/${p}`}>{packagesList[p].name}</Link>
                </td>
                <td>{packagesList[p].description}</td>
                <td>{packagesList[p].version}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>
                <EmptyMessage title="No Packages">
                  No packages available
                </EmptyMessage>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </DocsDashboardContent>
  </DocsDashboard>
);

const mapStateToProps = ({ packages }: RootStore) => ({
  packagesError: packages.errors,
  packagesList: packages.list
});

export default connect(mapStateToProps)(ComponentsHome);
