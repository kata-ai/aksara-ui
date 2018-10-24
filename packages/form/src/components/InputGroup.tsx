import * as React from 'react';
import styled from 'styled-components';

interface InputGroupProps extends React.AllHTMLAttributes<HTMLDivElement> {
  /** Additional CSS classes to give to the component. */
  className?: string;
}

const InputGroup: React.SFC<InputGroupProps> = ({
  className,
  children,
  ...rest
}) => (
  <Div className={className} {...rest}>
    {children}
  </Div>
);

export default InputGroup;

const Div = styled('div')`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
`;
