import React from 'react';
import styled from 'styled-components';

const Wrapper: React.SFC = ({ children }) => <Root>{children}</Root>;

export default Wrapper;

const Root = styled('div')`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
