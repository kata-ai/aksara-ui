import React from 'react';
import styled from 'styled-components';

const Content: React.SFC = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Content;

const Wrapper = styled('div')`
  flex: 1 1 auto;
  position: relative;
  z-index: 1;
`;
