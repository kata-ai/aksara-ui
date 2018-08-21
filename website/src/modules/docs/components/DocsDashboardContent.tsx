import React from 'react';
import styled from 'styled-components';

import { variables } from '@kata-kit/theme';

const DocsDashboardContent: React.SFC = ({ children }) => (
  <Root>{children}</Root>
);

export default DocsDashboardContent;

const Root = styled('div')`
  margin-top: ${variables.spaces.space3};
`;
