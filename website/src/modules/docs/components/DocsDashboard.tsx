import * as React from 'react';
import styled from 'styled-components';

import { variables } from '@kata-kit/theme';
import { Container } from '@kata-kit/layout';

const DocsDashboard: React.SFC = ({ children }) => (
  <Root>
    <Container>{children}</Container>
  </Root>
);

export default DocsDashboard;

const Root = styled('div')`
  min-height: 100vh;
  padding: ${variables.spaces.space3} 20px;

  @media (min-width: ${variables.breaks.breakMedium}) {
    padding: ${variables.spaces.space3} 40px;
  }

  @media (min-width: ${variables.breaks.breakLarge}) {
    padding: ${variables.spaces.space3} 48px;
  }
`;
