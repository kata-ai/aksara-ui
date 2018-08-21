import React from 'react';
import styled from 'styled-components';

import { variables } from '@kata-kit/theme';

const DocsDashboardContent: React.SFC = ({ children }) => (
  <Root>{children}</Root>
);

export default DocsDashboardContent;

const Root = styled('div')`
  h1 {
    &:first-child {
      margin-bottom: ${variables.spaces.space3};
    }
  }
`;
