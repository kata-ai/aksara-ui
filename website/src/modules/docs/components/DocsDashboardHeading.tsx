import React from 'react';
import styled from 'styled-components';

const DocsDashboardHeading: React.SFC = ({ children }) => (
  <Root>
    <Heading>{children}</Heading>
  </Root>
);

export default DocsDashboardHeading;

const Root = styled('div')`
  display: flex;
`;

const Heading = styled('h1')`
  margin: 0;
`;
