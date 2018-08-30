import React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';

import { Button } from '@kata-kit/button';

import ModalContext from './ModalContext';

export interface ModalHeaderProps {
  title: string;
  className?: string;
}

const ModalHeader: React.SFC<ModalHeaderProps> = ({ className, title }) => (
  <ModalContext.Consumer>
    {api => (
      <DrawerHeading
        className={classnames(api.overflow && 'is-overflow', className)}
      >
        <DrawerHeadingWrapper>
          <DrawerTitle>{title}</DrawerTitle>
          <Button isIcon onClick={api.onClose}>
            <i className="icon-close" />
          </Button>
        </DrawerHeadingWrapper>
      </DrawerHeading>
    )}
  </ModalContext.Consumer>
);

export default ModalHeader;

const DrawerTitle = styled('h2')`
  flex: 1 0 auto;
  margin-bottom: 0;
`;

const DrawerHeadingWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 18px 24px 14px;
`;

const DrawerHeading = styled('div')`
  position: relative;
  z-index: 1;

  &.is-overflow {
    box-shadow: $layer-100-shadow;
  }
`;
