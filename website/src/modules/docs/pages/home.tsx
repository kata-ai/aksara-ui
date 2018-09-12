import React from 'react';
import DocsDashboard from '../components/DocsDashboard';
import DocsDashboardContent from '../components/DocsDashboardContent';

// TODO: improve how we map + import MDX files
import Index from '../../../../../docs/index.mdx';
import {
  ContentH1,
  ContentH2,
  ContentH3,
  ContentParagraph,
  ContentCode,
  ContentInlineCode
} from '../components/DocsElements';

const DocsHome = () => (
  <DocsDashboard>
    <DocsDashboardContent>
      <Index
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
);

export default DocsHome;
