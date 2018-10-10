import * as React from 'react';
import Scrollbars from 'react-custom-scrollbars';

import DrawerContext from './DrawerContext';
import styled from 'styled-components';

export interface DrawerBodyProps {
  /** Additional CSS classes to give to the drawer body. */
  className?: string;
}

const DrawerBody: React.SFC<DrawerBodyProps> = ({ className, children }) => (
  <DrawerContext.Consumer>
    {api => (
      <Scrollbars onScrollFrame={scroll => api.watchOverflow(scroll.top)}>
        <Root className={className}>{children}</Root>
      </Scrollbars>
    )}
  </DrawerContext.Consumer>
);

export default DrawerBody;

const Root = styled('div')`
  padding: 26px 48px;
`;
