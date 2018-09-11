import * as React from 'react';
import universal from 'react-universal-component';
import { RouteComponentProps } from 'react-router';

import DocsDashboard from '../components/DocsDashboard';
import DocsDashboardContent from '../components/DocsDashboardContent';
import Loading from '../../core/components/Loading';

interface RouteParams {
  page: string;
}

const DocsPage: React.SFC<RouteComponentProps<RouteParams>> = ({ match }) => {
  const LazyloadedPage = universal(
    () => import(`../../../../../docs/${match.params.page}.mdx`),
    {
      loading: Loading
    }
  );

  return match.params.page ? (
    <DocsDashboard>
      <DocsDashboardContent>
        <LazyloadedPage />
      </DocsDashboardContent>
    </DocsDashboard>
  ) : null;
};

export default DocsPage;
