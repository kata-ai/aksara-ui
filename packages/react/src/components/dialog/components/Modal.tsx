import * as React from 'react';
import clsx from 'clsx';
import styled, { keyframes } from 'styled-components';
import { Transition } from 'react-transition-group';
import { TransitionStatus } from 'react-transition-group/Transition';
import { IconClose } from '@aksara-ui/icons';

import { Portal, FocusTrap } from '../../../helpers';
import { Box, BoxProps } from '../../../layout';
import { UnstyledButton } from '../../button';
import { ANIMATION_DURATION } from '../constants';
import ModalOverlay from './DialogOverlay';

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

const DialogWrapper = styled(Box)`
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
`;

export interface ModalProps extends BoxProps {
  /** Additional CSS classes to give to the drawer. */
  className?: string;
  /** Additional CSS properties to give to the drawer. */
  style?: React.CSSProperties;
  /** Whether the side sheet is open or not. */
  isOpen: boolean;
  /** Set to `true` if you want to hide the drawer backdrop. */
  noBackdrop?: boolean;
  /** Hides the default close button. Useful if you want to add custom close behaviour. */
  hideCloseButton?: boolean;
  /** Set to `true` to disable closing the drawer by clicking the overlay. */
  disableOverlayClick?: boolean;
  /** Enables focus trap mode. Also enables closing dialog by pressing Escape. */
  enableFocusTrap?: boolean;
  /** Used to reference the ID of the title element in the drawer */
  labelledById?: string;
  /** Set max width of dialog, default of 500px */
  maxWidth?: string | number;
  /** Set width of dialog, default of 100% */
  width?: string | number;
  /** Set max height of dialog, default of calc(100% - 24vmin) */
  maxHeight?: string | number;
  /** Set height of dialog */
  height?: string | number;
  /** Dialog overflow */
  overflow?: string;
  /** Callback method run when the "Close Drawer" button is clicked. */
  onClose?: () => void;
}

interface ModalState {
  isOpen: boolean;
}

/**
 * Display a modal interface that will block interaction with the rest of the page with an overlay.
 */
class Modal extends React.Component<ModalProps, ModalState> {
  static displayName = 'Modal';

  static defaultProps = {
    className: undefined,
    style: undefined,
    enableFocusTrap: false,
    disableOverlayClick: false,
    isOpen: false,
  };

  constructor(props: ModalProps) {
    super(props);
    this.state = {
      isOpen: props.isOpen,
    };

    this.handleCloseSideSheet = this.handleCloseSideSheet.bind(this);
    this.handleOverlayClick = this.handleOverlayClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  static getDerivedStateFromProps(props: ModalProps) {
    return {
      isOpen: props.isOpen,
    };
  }

  componentDidUpdate(prev: ModalProps) {
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
    const { disableOverlayClick } = this.props;

    // Prevent clicking to exit inside the dialog
    if (e.target !== e.currentTarget) {
      return;
    }

    if (!disableOverlayClick) {
      this.handleCloseSideSheet();
    }
  }

  renderInnerContent = (state: TransitionStatus) => {
    const {
      className,
      style,
      labelledById,
      hideCloseButton,
      children,
      maxWidth,
      width,
      height,
      maxHeight,
      overflow = 'hidden',
      ...rest
    } = this.props;
    const { isOpen } = this.state;

    return (
      <ModalOverlay className={clsx(isOpen && 'entered')} data-state={state} onClick={this.handleOverlayClick}>
        <DialogWrapper
          className={clsx(isOpen && 'entered', className)}
          style={style}
          position="relative"
          display="flex"
          flexDirection="column"
          backgroundColor="white"
          borderRadius={16}
          overflow={overflow}
          height={height}
          width={width || '100%'}
          maxWidth={maxWidth || '500px'}
          maxHeight={maxHeight || 'calc(100% - 24vmin)'}
          boxShadow={4}
          my="12vmin"
          mx="md"
          role="dialog"
          aria-modal="true"
          aria-labelledby={labelledById}
          data-state={state}
          sx={{
            opacity: 0,
            transform: 'translate(0, -25%)',
            '&.entered': {
              opacity: 1,
              transform: 'translate(0, 0)',
            },
          }}
          {...rest}
        >
          {!hideCloseButton && (
            <UnstyledButton
              type="button"
              aria-label="Close"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                top: 24,
                right: 24,
                width: 24,
                height: 24,
                color: 'greydark02',
              }}
              onClick={this.handleCloseSideSheet}
            >
              <IconClose aria-hidden size={24} fill="currentColor" />
            </UnstyledButton>
          )}
          {children}
        </DialogWrapper>
      </ModalOverlay>
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
              exit: ANIMATION_DURATION,
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
            exit: ANIMATION_DURATION,
          }}
          unmountOnExit
        >
          {this.renderInnerContent}
        </Transition>
      </Portal>
    );
  }
}

/** @deprecated - use `Modal` instead */
export const Dialog = Modal;

export default Modal;
