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
    noBackdrop: false
  };

  el: HTMLDivElement;

  state = {
    show: false,
    visible: false
  };

  constructor(props: ModalProps) {
    super(props);
    this.el = document.createElement('div');

    this.onCloseDrawer = this.onCloseDrawer.bind(this);
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

  handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Escape') {
      this.onCloseDrawer();
    }
  }

  onCloseDrawer() {
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
      onClose: this.onCloseDrawer
    };
  }

  render() {
    const wrapper = (
      <FocusTrap active={this.state.show} onKeyDown={this.handleKeyDown}>
        {!this.props.noBackdrop && (
          <ModalOverlay
            className={classnames(this.state.show ? 'is-open' : 'is-closed')}
            onClick={this.onCloseDrawer}
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
              onClick={!this.props.noBackdrop ? this.onCloseDrawer : undefined}
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
