import React from 'react';
import styled from 'styled-components';

const DocsDashboard: React.SFC = ({ children }) => (
  <Root>
    <Container>{children}</Container>
  </Root>
);

export default DocsDashboard;

const Root = styled('div')`
  min-height: 100vh;
  padding: 1.846153846rem /* $space-3 */ 20px;
  background-color: #fff;

  @media (min-width: 1280px /* $break-medium */) {
    padding: 1.846153846rem /* $space-3 */ 40px;
  }

  @media (min-width: 1366px /* $break-large */) {
    padding: 1.846153846rem /* $space-3 */ 48px;
  }

  & p {
    font-size: 14px;
    line-height: 22px;
    font-weight: 300;
  }
`;

const Container = styled('div')`
  width: 100%;
  max-width: 704px;
  margin: 0 auto;
`;
