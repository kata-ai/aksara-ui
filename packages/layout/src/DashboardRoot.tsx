import React from 'react';
import styled from 'styled-components';

const DashboardRoot: React.SFC = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);

export default DashboardRoot;

const Wrapper = styled('div')`
  display: table;
  table-layout: fixed;
  width: 100%;
  height: 100%;
`;
