import * as React from 'react';
import clsx from 'clsx';
import styled, { keyframes } from 'styled-components';
import { Transition } from 'react-transition-group';
import { TransitionStatus } from 'react-transition-group/Transition';
import { Portal, FocusTrap } from '../../../helpers';
import { Box, BoxProps } from '../../../layout';
import { ANIMATION_DURATION } from '../constants';
import { Overlay } from '../../overlay';

const ModalIn = keyframes`
  0% {
    opacity: 0;
    transform: translate(0, -25%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ModalOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    transform: translate(0, -25%);
  }
`;

const ModalWrapper = styled(Box)`
  &[data-state='entering'],
  &[data-state='entered'] {
    animation-fill-mode: forwards;
    animation-name: ${ModalIn};
    animation-duration: ${ANIMATION_DURATION}ms;
  }

  &[data-state='exiting'] {
    animation-fill-mode: forwards;
    animation-name: ${ModalOut};
    animation-duration: ${ANIMATION_DURATION}ms;
  }
`;

export interface ModalProps extends Omit<BoxProps, 'children'> {
  /** Render header */
  header?: React.ReactNode;
  /** Render footer. */
  footer?: React.ReactNode;
  /** Render content. */
  content?: React.ReactNode;
  /** Additional CSS classes to give to the drawer. */
  className?: string;
  /** Additional CSS properties to give to the drawer. */
  style?: React.CSSProperties;
  /** Whether the side sheet is open or not. */
  isOpen: boolean;
  /** Set to `true` if you want to hide the drawer backdrop. */
  noBackdrop?: boolean;
  /** Set to `true` to disable closing the drawer by clicking the overlay. */
  disableOverlayClick?: boolean;
  /** Enables focus trap mode. Also enables closing modal by pressing Escape. */
  enableFocusTrap?: boolean;
  /** Used to reference the ID of the title element in the drawer */
  labelledById?: string;
  /** Set max width of modal, default of 500px */
  maxWidth?: string | number;
  /** Set width of modal, default of 100% */
  width?: string | number;
  /** Set max height of modal, default of calc(100% - 24vmin) */
  maxHeight?: string | number;
  /** Set height of modal */
  height?: string | number;
  /** Modal overflow */
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

    // Prevent clicking to exit inside the modal
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
      header,
      content,
      footer,
      maxWidth,
      width,
      height,
      maxHeight,
      overflow = 'hidden',
      ...rest
    } = this.props;
    const { isOpen } = this.state;

    return (
      <Overlay className={clsx(isOpen && 'entered')} data-state={state} onClick={this.handleOverlayClick}>
        <ModalWrapper
          className={clsx(isOpen && 'entered', className)}
          style={style}
          position="relative"
          display="flex"
          flexDirection="column"
          backgroundColor="white"
          borderRadius={'lg'}
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
          {header}
          {content}
          {footer}
        </ModalWrapper>
      </Overlay>
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

export default Modal;
