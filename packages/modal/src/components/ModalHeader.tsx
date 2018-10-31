import * as React from 'react';
import styled from 'styled-components';

import { Button } from '@kata-kit/button';
import { variables } from '@kata-kit/theme';

import ModalContext from './ModalContext';

export interface ModalHeaderProps {
  /** Modal title. */
  title: string;
  /** Additional CSS classes to give to the modal header. */
  className?: string;
}

const ModalHeader: React.SFC<ModalHeaderProps> = ({ className, title }) => (
  <ModalContext.Consumer>
    {api => (
      <ModalHeading className={className}>
        <ModalHeadingWrapper>
          <ModalTitle id={api.labelledById}>{title}</ModalTitle>
          <Button
            data-testid="ModalHeader-closeButton"
            isIcon
            onClick={api.onClose}
          >
            <i className="icon-close" />
          </Button>
        </ModalHeadingWrapper>
      </ModalHeading>
    )}
  </ModalContext.Consumer>
);

export default ModalHeader;

const ModalTitle = styled('h2')`
  flex: 1 0 auto;
  margin-bottom: 0;
  font-size: 20px;
  line-height: 28px;
`;

const ModalHeadingWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 18px 24px 14px;
`;

const ModalHeading = styled('div')`
  position: relative;
  z-index: 1;

  &.is-overflow {
    box-shadow: ${variables.layerShadows.layer100Shadow};
  }
`;
