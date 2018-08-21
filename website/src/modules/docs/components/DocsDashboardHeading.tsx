import React from 'react';
import styled from 'styled-components';
import { variables } from '@kata-kit/theme';

const DocsDashboardHeading: React.SFC = ({ children }) => (
  <Root>
    <Heading>{children}</Heading>
  </Root>
);

export default DocsDashboardHeading;

const Root = styled('div')`
  display: flex;
  margin-bottom: ${variables.spaces.space3};
`;

const Heading = styled('h1')`
  margin: 0;
`;
