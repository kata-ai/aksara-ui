import React from 'react';
import styled from 'styled-components';

const DocsDashboardContent: React.SFC = ({ children }) => (
  <Root>{children}</Root>
);

export default DocsDashboardContent;

const Root = styled('div')`
  margin-top: 1.846153846rem /* $space-3 */;
`;
