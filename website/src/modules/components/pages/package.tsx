import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import universal, { UniversalComponent } from 'react-universal-component';

import DocsDashboard from '../../docs/components/DocsDashboard';
import DocsDashboardHeading from '../../docs/components/DocsDashboardHeading';
import DocsDashboardContent from '../../docs/components/DocsDashboardContent';
import Loading from '../../core/components/Loading';

import { PackageMetadata, RootStore } from '../../../types/app';
import {
  ContentH1,
  ContentH2,
  ContentH3,
  ContentParagraph,
  ContentCode,
  ContentInlineCode,
  ContentTable
} from '../../docs/components/DocsElements';

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
  const Doc: UniversalComponent<any> = generateDocs(match.params);

  return (
    <DocsDashboard>
      {metadata && <DocsDashboardHeading>{metadata.name}</DocsDashboardHeading>}
      <DocsDashboardContent>
        <Doc
          components={{
            h1: props => <ContentH1 {...props} />,
            h2: props => <ContentH2 {...props} />,
            h3: props => <ContentH3 {...props} />,
            p: props => <ContentParagraph {...props} />,
            table: props => <ContentTable {...props} />,
            code: props => <ContentCode {...props} />,
            inlineCode: props => <ContentInlineCode {...props} />
          }}
        />
      </DocsDashboardContent>
    </DocsDashboard>
  );
};

const mapStateToProps = ({ packages }: RootStore) => ({
  packagesError: packages.errors,
  packagesList: packages.list
});

export default connect(mapStateToProps)(ComponentsPage);
