import * as React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';

import { Button } from '@kata-kit/button';

import DrawerContext from './DrawerContext';

export interface DrawerHeaderProps {
  /** Drawer title. */
  title: string;
  /** Additional CSS classes to give to the drawer header. */
  className?: string;
}

const DrawerHeader: React.SFC<DrawerHeaderProps> = ({ className, title }) => (
  <DrawerContext.Consumer>
    {api => (
      <DrawerHeading
        className={classnames(api.overflow && 'is-overflow', className)}
      >
        <DrawerHeadingWrapper>
          <DrawerTitle id={api.labelledById}>{title}</DrawerTitle>
          <Button isIcon onClick={api.onClose}>
            <i className="icon-close" />
          </Button>
        </DrawerHeadingWrapper>
      </DrawerHeading>
    )}
  </DrawerContext.Consumer>
);

export default DrawerHeader;

const DrawerTitle = styled('h2')`
  flex: 1 0 auto;
  margin-bottom: 0;
`;

const DrawerHeadingWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 26px 48px;
`;

const DrawerHeading = styled('div')`
  height: 80px;
  position: relative;
  z-index: 1;

  &.is-overflow {
    box-shadow: $layer-100-shadow;
  }
`;
