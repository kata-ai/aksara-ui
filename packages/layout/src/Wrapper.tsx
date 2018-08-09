import React from 'react';
import styled from 'styled-components';

const Wrapper: React.SFC = ({ children }) => <Root>{children}</Root>;

export default Wrapper;

const Root = styled('div')`
  display: table;
  table-layout: fixed;
  width: 100%;
  height: 100%;
`;
