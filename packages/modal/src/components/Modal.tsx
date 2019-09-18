import * as React from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';
import classnames from 'classnames';

import { Theme } from '@kata-kit/theme';
import { FocusTrap } from '@kata-kit/common';

import ModalDialog from './ModalDialog';
import ModalContext from './ModalContext';
import { ModalOverlayStyles, ModalBase, WithThemeProps } from '../styles';

export interface ModalProps {
  /** Whether the modal is open or not. */
  show: boolean;
  /** Hide the dark overlay behind the modal. */
  noBackdrop?: boolean;
  /** Additional CSS classes to give to the modal. */
  className?: string;
  /** Used to reference the ID of the title element in the modal */
  labelledById?: string;
  /** Disables focus trap mode. */
  disableFocusTrap?: boolean;
  /** Callback method run when the Close button is clicked. */
  onClose(): void;
}

export interface ToggleableProps {
  show?: boolean;
}

export interface ModalState {
  show: boolean;
  visible: boolean;
}

class Modal extends React.Component<ModalProps, ModalState> {
  static defaultProps = {
    noBackdrop: false,
    disableFocusTrap: false
  };

  el: HTMLDivElement;

  state = {
    show: this.props.show,
    visible: this.props.show
  };

  constructor(props: ModalProps) {
    super(props);
    this.el = document.createElement('div');

    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleModalOverlayClick = this.handleModalOverlayClick.bind(this);
    this.watchOverflow = this.watchOverflow.bind(this);
    this.getContextAPI = this.getContextAPI.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidUpdate(prevProps: ModalProps, state: ModalState) {
    if (this.props.show !== prevProps.show) {
      this.setState({ show: this.props.show, visible: this.props.show });
    }
  }

  componentDidMount() {
    try {
      document.body.appendChild(this.el);
    } catch (error) {
      // do nothing
    }
  }

  componentWillUnmount() {
    try {
      document.body.removeChild(this.el);
    } catch (error) {
      // do nothing
    }
  }

  handleKeyDown(e: React.KeyboardEvent) {
    e.preventDefault();
    e.stopPropagation(); // just to be sure

    if (e.key === 'Escape') {
      this.handleCloseModal();
    }
  }

  handleModalOverlayClick(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();

    this.handleCloseModal();
  }

  handleCloseModal() {
    this.props.onClose();
  }

  watchOverflow(position: number) {
    if (position > 0.05) {
      this.setState({ visible: true });
    } else {
      this.setState({ visible: false });
    }
  }

  getContextAPI() {
    return {
      show: this.state.show,
      overflow: this.state.visible,
      labelledById: this.props.labelledById,
      watchOverflow: this.watchOverflow,
      onClose: this.handleCloseModal
    };
  }

  render() {
    const { disableFocusTrap } = this.props;
    let wrapper: JSX.Element;

    if (disableFocusTrap) {
      wrapper = (
        <>
          {!this.props.noBackdrop && (
            <ModalOverlay
              className={classnames(this.state.show ? 'is-open' : 'is-closed')}
              onClick={this.handleModalOverlayClick}
            />
          )}
          <Theme>
            {themeAttributes => (
              <ModalWrapper
                data-testid="Modal-wrapper"
                className={classnames(
                  this.state.show ? 'is-open' : 'is-closed',
                  this.props.className
                )}
                role="dialog"
                aria-modal="true"
                aria-labelledby={this.props.labelledById}
                onKeyDown={this.handleKeyDown}
                {...themeAttributes}
              >
                <ModalContext.Provider value={this.getContextAPI()}>
                  <ModalDialog>{this.props.children}</ModalDialog>
                </ModalContext.Provider>
              </ModalWrapper>
            )}
          </Theme>
        </>
      );
    } else {
      wrapper = (
        <FocusTrap active={this.state.show} onKeyDown={this.handleKeyDown}>
          {!this.props.noBackdrop && (
            <ModalOverlay
              className={classnames(this.state.show ? 'is-open' : 'is-closed')}
              onClick={this.handleCloseModal}
            />
          )}
          <Theme>
            {themeAttributes => (
              <ModalWrapper
                data-testid="Modal-wrapper"
                className={classnames(
                  this.state.show ? 'is-open' : 'is-closed',
                  this.props.className
                )}
                onClick={
                  !this.props.noBackdrop ? this.handleCloseModal : undefined
                }
                role="dialog"
                aria-modal="true"
                aria-labelledby={this.props.labelledById}
                {...themeAttributes}
              >
                <ModalContext.Provider value={this.getContextAPI()}>
                  <ModalDialog>{this.props.children}</ModalDialog>
                </ModalContext.Provider>
              </ModalWrapper>
            )}
          </Theme>
        </FocusTrap>
      );
    }

    return createPortal(wrapper, this.el) as React.ReactPortal;
  }
}

export default Modal;

const ModalOverlay = styled('div')`
  ${ModalOverlayStyles};
`;

const ModalWrapper = styled('div')`
  ${(props: WithThemeProps<ModalProps>) => ModalBase(props)};
`;
