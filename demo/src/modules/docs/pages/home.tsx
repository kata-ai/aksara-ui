import React from 'react';
import DocsDashboard from '../components/DocsDashboard';
import DocsDashboardHeading from '../components/DocsDashboardHeading';
import DocsDashboardContent from '../components/DocsDashboardContent';

// TODO: improve how we map + import MDX files
import Index, { meta } from '../../../../../docs/index.mdx';

const DocsHome = () => (
  <DocsDashboard>
    <DocsDashboardHeading>{meta.title}</DocsDashboardHeading>
    <DocsDashboardContent>
      <Index />
    </DocsDashboardContent>
  </DocsDashboard>
);

export default DocsHome;
