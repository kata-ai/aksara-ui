import * as React from 'react';
import styled from 'styled-components';

interface InputGroupProps {
  className?: string;
}

const InputGroup: React.SFC<InputGroupProps> = ({ className, children }) => (
  <Div className={className}>{children}</Div>
);

export default InputGroup;

const Div = styled('div')`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
`;
