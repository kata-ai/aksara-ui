import * as React from 'react';
import clsx from 'clsx';
import styled, { keyframes } from 'styled-components';
import { Transition } from 'react-transition-group';

import { Portal, Box, Card } from '../../../foundations';
import { ANIMATION_DURATION } from '../../notification/utils/constants';
import SideSheetOverlay from './SideSheetOverlay';
import { IconButton } from '../../button';

const SideSheetIn = keyframes`
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(0);
  }
`;

const SideSheetOut = keyframes`
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(100%);
  }
`;

const SideSheetWrapper = styled(Box)`
  transform: translateX(100%);

  &[data-state='entering'],
  &[data-state='entered'] {
    animation-timing-function: cubic-bezier(0.15, 1, 0.3, 1);
    animation-fill-mode: forwards;
    animation-name: ${SideSheetIn};
    animation-duration: ${ANIMATION_DURATION}ms;
  }

  &[data-state='exiting'] {
    animation-timing-function: cubic-bezier(0.15, 1, 0.3, 1);
    animation-fill-mode: forwards;
    animation-name: ${SideSheetOut};
    animation-duration: ${ANIMATION_DURATION}ms;
  }

  &.entered {
    transform: translateX(0);
  }
`;

const CloseButton = styled(IconButton)`
  position: absolute;
  top: 26px;
  right: 48px;
`;

export interface SideSheetProps {
  /** Additional CSS classes to give to the drawer. */
  className?: string;
  /** Additional CSS properties to give to the drawer. */
  style?: React.CSSProperties;
  /** Whether the side sheet is open or not. */
  isOpen: boolean;
  /** Set to `true` if you want to hide the drawer backdrop. */
  noBackdrop?: boolean;
  /** Set to `true` to enable closing the drawer by clicking the overlay. */
  isOverlayClickable?: boolean;
  /** Enables focus trap mode. */
  enableFocusTrap?: boolean;
  /** Used to reference the ID of the title element in the drawer */
  labelledById?: string;
  /** Callback method run when the "Close Drawer" button is clicked. */
  onClose?: () => void;
}

export interface SideSheetState {
  isOpen: boolean;
  overflow: boolean;
}

const SideSheet: React.FC<SideSheetProps> = ({ isOpen, onClose, children }) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.classList.add('noscroll');
    } else {
      document.body.classList.remove('noscroll');
    }

    return () => {
      document.body.classList.remove('noscroll');
    };
  }, [isOpen]);

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Prevent clicking to exit inside the dialog
    if (e.target !== e.currentTarget) {
      return;
    }

    handleClose();
  };

  return (
    <Portal>
      <Transition
        appear
        in={isOpen}
        timeout={{
          enter: ANIMATION_DURATION,
          exit: ANIMATION_DURATION + 100
        }}
        unmountOnExit
      >
        {state => (
          <SideSheetOverlay
            className={clsx(isOpen && 'entered')}
            data-state={state}
            onClick={handleOverlayClick}
          >
            <SideSheetWrapper
              className={clsx(isOpen && 'entered')}
              position="absolute"
              right={0}
              data-state={state}
            >
              <Card
                display="flex"
                flexDirection="column"
                backgroundColor="white"
                boxShadow="layer300"
                width="500px"
                height="100vh"
              >
                <CloseButton type="button" aria-label="Close" variant="ghost" onClick={handleClose}>
                  <i className="icon-close" />
                </CloseButton>
                {children}
              </Card>
            </SideSheetWrapper>
          </SideSheetOverlay>
        )}
      </Transition>
    </Portal>
  );
};

SideSheet.defaultProps = {
  className: undefined,
  style: undefined,
  enableFocusTrap: false,
  isOverlayClickable: false,
  isOpen: false
};

export default SideSheet;
