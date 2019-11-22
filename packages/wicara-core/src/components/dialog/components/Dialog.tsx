import * as React from 'react';
import clsx from 'clsx';
import styled, { keyframes } from 'styled-components';
import { Transition } from 'react-transition-group';

import { Portal, Card, FocusTrap } from '../../../foundations';
import { ANIMATION_DURATION } from '../../notification/utils/constants';
import DialogOverlay from './DialogOverlay';
import { IconButton } from '../../button';

const DialogIn = keyframes`
  0% {
    opacity: 0;
    transform: translate(0, -25%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const DialogOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    transform: translate(0, -25%);
  }
`;

const DialogWrapper = styled(Card)`
  opacity: 0;
  transform: translate(0, -25%);
  overflow: hidden;

  &[data-state='entering'],
  &[data-state='entered'] {
    animation-fill-mode: forwards;
    animation-name: ${DialogIn};
    animation-duration: ${ANIMATION_DURATION}ms;
  }

  &[data-state='exiting'] {
    animation-fill-mode: forwards;
    animation-name: ${DialogOut};
    animation-duration: ${ANIMATION_DURATION}ms;
  }

  &.entered {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

const CloseButton = styled(IconButton)`
  position: absolute;
  top: 18px;
  right: 24px;
`;

export interface DialogProps {
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

interface DialogState {
  isOpen: boolean;
}

/**
 * Display a modal interface that will display a content on top of an overlay blocking interaction
 * with the rest of the page.
 */
class Dialog extends React.Component<DialogProps, DialogState> {
  static defaultProps = {
    className: undefined,
    style: undefined,
    enableFocusTrap: false,
    isOverlayClickable: false,
    isOpen: false
  };

  static displayName = 'Dialog';

  constructor(props: DialogProps) {
    super(props);
    this.state = {
      isOpen: props.isOpen
    };

    this.handleCloseSideSheet = this.handleCloseSideSheet.bind(this);
    this.handleOverlayClick = this.handleOverlayClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  static getDerivedStateFromProps(props: DialogProps) {
    return {
      isOpen: props.isOpen
    };
  }

  componentDidUpdate(prev: DialogProps) {
    const { isOpen } = this.props;

    if (prev.isOpen !== isOpen) {
      if (isOpen) {
        document.body.classList.add('noscroll');
      } else {
        document.body.classList.remove('noscroll');
      }
    }
  }

  handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Escape') {
      this.handleCloseSideSheet();
    }
  }

  handleCloseSideSheet() {
    const { onClose } = this.props;

    if (onClose) {
      onClose();
    }
  }

  handleOverlayClick(e: React.MouseEvent<HTMLDivElement>) {
    // Prevent clicking to exit inside the dialog
    if (e.target !== e.currentTarget) {
      return;
    }

    this.handleCloseSideSheet();
  }

  render() {
    const { children, labelledById, enableFocusTrap } = this.props;
    const { isOpen } = this.state;

    if (enableFocusTrap) {
      return (
        <Portal>
          <Transition
            appear
            in={isOpen}
            timeout={{
              enter: ANIMATION_DURATION,
              exit: ANIMATION_DURATION
            }}
            unmountOnExit
          >
            {state => (
              <FocusTrap active={isOpen} onKeyDown={this.handleKeyDown}>
                <DialogOverlay
                  className={clsx(isOpen && 'entered')}
                  data-state={state}
                  onClick={this.handleOverlayClick}
                >
                  <DialogWrapper
                    className={clsx(isOpen && 'entered')}
                    display="flex"
                    flexDirection="column"
                    backgroundColor="white"
                    boxShadow="layer300"
                    borderRadius="lg"
                    width="100%"
                    maxWidth="500px"
                    maxHeight="calc(100% - 24vmin)"
                    my="12vmin"
                    mx="md"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={labelledById}
                    data-state={state}
                  >
                    <CloseButton
                      type="button"
                      aria-label="Close"
                      variant="ghost"
                      onClick={this.handleCloseSideSheet}
                    >
                      <i className="icon-close" />
                    </CloseButton>
                    {children}
                  </DialogWrapper>
                </DialogOverlay>
              </FocusTrap>
            )}
          </Transition>
        </Portal>
      );
    }

    return (
      <Portal>
        <Transition
          appear
          in={isOpen}
          timeout={{
            enter: ANIMATION_DURATION,
            exit: ANIMATION_DURATION
          }}
          unmountOnExit
        >
          {state => (
            <DialogOverlay
              className={clsx(isOpen && 'entered')}
              data-state={state}
              onClick={this.handleOverlayClick}
            >
              <DialogWrapper
                className={clsx(isOpen && 'entered')}
                display="flex"
                flexDirection="column"
                backgroundColor="white"
                boxShadow="layer300"
                borderRadius="lg"
                width="100%"
                maxWidth="500px"
                maxHeight="calc(100% - 24vmin)"
                my="12vmin"
                mx="md"
                role="dialog"
                aria-modal="true"
                aria-labelledby={labelledById}
                data-state={state}
              >
                <CloseButton
                  type="button"
                  aria-label="Close"
                  variant="ghost"
                  onClick={this.handleCloseSideSheet}
                >
                  <i className="icon-close" />
                </CloseButton>
                {children}
              </DialogWrapper>
            </DialogOverlay>
          )}
        </Transition>
      </Portal>
    );
  }
}

export default Dialog;
