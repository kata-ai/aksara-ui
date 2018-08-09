import React from 'react';
import styled from 'styled-components';

import './AppRoot.scss';

interface InnerProps {
  className?: string;
}

const WrapperInner: React.SFC<InnerProps> = ({ children, className }) => (
  <Wrapper className={className}>{children}</Wrapper>
);

export default WrapperInner;

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
