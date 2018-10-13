import * as React from 'react';
import styled from 'styled-components';

import ModalContext from './ModalContext';

export interface ModalBodyProps {
  /** Additional CSS classes to give to the modal body. */
  className?: string;
}

const ModalBody: React.SFC<ModalBodyProps> = ({ className, children }) => (
  <ModalContext.Consumer>
    {api => (
      <Root className={className} id={api.ids.describedBy}>
        {children}
      </Root>
    )}
  </ModalContext.Consumer>
);

export default ModalBody;

const Root = styled('div')`
  padding: 0 1.84615rem 3.07692rem;
`;
