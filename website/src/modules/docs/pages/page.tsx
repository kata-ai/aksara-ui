import * as React from 'react';
import universal from 'react-universal-component';
import { RouteComponentProps } from 'react-router';

import DocsDashboard from '../components/DocsDashboard';
import DocsDashboardContent from '../components/DocsDashboardContent';
import Loading from '../../core/components/Loading';
import {
  ContentH1,
  ContentH2,
  ContentH3,
  ContentParagraph,
  ContentCode,
  ContentInlineCode
} from '../components/DocsElements';

interface RouteParams {
  page: string;
}

const DocsPage: React.SFC<RouteComponentProps<RouteParams>> = ({ match }) => {
  const LazyloadedPage = universal<any>(
    () => import(`../../../../../docs/${match.params.page}.mdx`),
    {
      loading: Loading
    }
  );

  return match.params.page ? (
    <DocsDashboard>
      <DocsDashboardContent>
        <LazyloadedPage
          components={{
            h1: props => <ContentH1 {...props} />,
            h2: props => <ContentH2 {...props} />,
            h3: props => <ContentH3 {...props} />,
            p: props => <ContentParagraph {...props} />,
            code: props => <ContentCode {...props} />,
            inlineCode: props => <ContentInlineCode {...props} />
          }}
        />
      </DocsDashboardContent>
    </DocsDashboard>
  ) : null;
};

export default DocsPage;
