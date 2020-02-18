import * as React from 'react';
import styled from 'styled-components';

export interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Additional CSS classes to give to the component. */
  className?: string;
}

const Div = styled('div')`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
`;

const InputGroup: React.SFC<InputGroupProps> = ({ className, children, ...rest }) => (
  <Div className={className} {...rest}>
    {children}
  </Div>
);

InputGroup.displayName = 'InputGroup';

export default InputGroup;
