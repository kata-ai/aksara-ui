import React from 'react';
import DocsDashboard from '../components/DocsDashboard';
import DocsDashboardContent from '../components/DocsDashboardContent';

// TODO: improve how we map + import MDX files
import Index from '../../../../../docs/index.mdx';

const DocsHome = () => (
  <DocsDashboard>
    <DocsDashboardContent>
      <Index />
    </DocsDashboardContent>
  </DocsDashboard>
);

export default DocsHome;
