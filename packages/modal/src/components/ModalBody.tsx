import * as React from 'react';
import styled from 'styled-components';

export interface ModalBodyProps {
  /** Additional CSS classes to give to the modal body. */
  className?: string;
}

const ModalBody: React.SFC<ModalBodyProps> = ({ className, children }) => (
  <Root className={className}>{children}</Root>
);

export default ModalBody;

const Root = styled('div')`
  padding: 0 1.84615rem 3.07692rem;
`;
