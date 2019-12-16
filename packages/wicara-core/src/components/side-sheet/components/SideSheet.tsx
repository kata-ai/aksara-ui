import * as React from 'react';
import clsx from 'clsx';
import styled, { keyframes } from 'styled-components';
import { Transition } from 'react-transition-group';
import { TransitionStatus } from 'react-transition-group/Transition';

import { Portal, Box, Card, FocusTrap } from '../../../foundations';
import { IconButton } from '../../button';
import { ANIMATION_DURATION } from '../constants';
import SideSheetOverlay from './SideSheetOverlay';

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
  /** Hides the default close button. Useful if you want to add custom close behaviour. */
  hideCloseButton?: boolean;
  /** Set to `true` if you want to hide the drawer backdrop. */
  noBackdrop?: boolean;
  /** Set to `true` to enable closing the drawer by clicking the overlay. */
  isOverlayClickable?: boolean;
  /** Enables focus trap mode. Also enables closing side sheet by pressing Escape. */
  enableFocusTrap?: boolean;
  /** Used to reference the ID of the title element in the drawer */
  labelledById?: string;
  /** Callback method run when the "Close Drawer" button is clicked. */
  onClose?: () => void;
}

interface SideSheetState {
  isOpen: boolean;
}

/** Side Sheets are dialogs that pop out from the right side of the screen. */
class SideSheet extends React.Component<SideSheetProps, SideSheetState> {
  static displayName = 'SideSheet';

  static defaultProps = {
    className: undefined,
    style: undefined,
    enableFocusTrap: false,
    isOverlayClickable: false,
    isOpen: false
  };

  constructor(props: SideSheetProps) {
    super(props);
    this.state = {
      isOpen: props.isOpen
    };

    this.handleCloseSideSheet = this.handleCloseSideSheet.bind(this);
    this.handleOverlayClick = this.handleOverlayClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  static getDerivedStateFromProps(props: SideSheetProps) {
    return {
      isOpen: props.isOpen
    };
  }

  componentDidUpdate(prev: SideSheetProps) {
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

  renderInnerContent = (state: TransitionStatus) => {
    const { children, labelledById, hideCloseButton } = this.props;
    const { isOpen } = this.state;

    return (
      <SideSheetOverlay
        className={clsx(isOpen && 'entered')}
        data-state={state}
        onClick={this.handleOverlayClick}
      >
        <SideSheetWrapper
          className={clsx(isOpen && 'entered')}
          position="absolute"
          right={0}
          role="dialog"
          aria-modal="true"
          aria-labelledby={labelledById}
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
            {!hideCloseButton && (
              <CloseButton
                type="button"
                aria-label="Close"
                variant="ghost"
                onClick={this.handleCloseSideSheet}
              >
                <i className="icon-close" />
              </CloseButton>
            )}
            {children}
          </Card>
        </SideSheetWrapper>
      </SideSheetOverlay>
    );
  };

  render() {
    const { enableFocusTrap } = this.props;
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
                {this.renderInnerContent(state)}
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
          {this.renderInnerContent}
        </Transition>
      </Portal>
    );
  }
}

export default SideSheet;
