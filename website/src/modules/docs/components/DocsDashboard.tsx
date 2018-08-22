import React from 'react';
import styled from 'styled-components';

import { variables } from '@kata-kit/theme';

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

const Container = styled('div')`
  width: 100%;
  max-width: 704px;
  margin: 0 auto;
`;
