import React from 'react';
import styled from 'styled-components';

const Container: React.SFC = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Container;

const Wrapper = styled('div')`
  width: 100%;
  max-width: 704px;
  margin: 0 auto;

  @media (min-width: 1280px /* $break-medium */) {
    max-width: 920px;
  }

  @media (min-width: 1366px /* $break-large */) {
    max-width: 990px;
  }

  @media (min-width: 1440px /* $break-large */) {
    max-width: 1160px;
  }
`;
