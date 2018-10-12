import * as React from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';
import classnames from 'classnames';
import FocusLock from 'react-focus-lock';

import { Theme } from '@kata-kit/theme';

import DrawerContext from './DrawerContext';
import {
  DrawerOverlayStyles,
  DrawerRight,
  DrawerBase,
  WithThemeProps
} from '../styles';
import theme from '../theme';

export interface DrawerProps {
  /** Whether the modal is open or not. */
  isOpen: boolean;
  /**
   * Set to `true` if you want the drawer to feature an overlay backdrop.
   * Set to `'static'` to make the overlay backdrop unclickable.
   */
  backdrop?: true | false | 'static';
  /** Additional CSS classes to give to the drawer. */
  className?: string;
  /** Callback method run when the "Close Drawer" button is clicked. */
  onClose(): void;
}

export interface DrawerState {
  isOpen: boolean;
  overflow: boolean;
}

class Drawer extends React.Component<DrawerProps, DrawerState> {
  static defaultProps = {
    backdrop: 'static'
  };

  static getDerivedStateFromProps(props: DrawerProps, state: DrawerState) {
    return {
      isOpen: props.isOpen
    };
  }

  el: HTMLDivElement;
  private drawerWrapperRef = React.createRef<HTMLDivElement>();

  constructor(props: DrawerProps) {
    super(props);
    this.el = document.createElement('div');
    this.state = {
      isOpen: props.isOpen,
      overflow: false
    };

    this.watchOverflow = this.watchOverflow.bind(this);
    this.onCloseDrawer = this.onCloseDrawer.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    this.reset();
    document.body.removeChild(this.el);
  }

  componentDidUpdate(prevProps: DrawerProps, prevState: DrawerState) {
    // https://github.com/kata-ai/kata-kit/issues/41#issuecomment-428330899
    if (this.state.isOpen && prevState.isOpen !== this.state.isOpen) {
      const modalWrapperElement = this.drawerWrapperRef.current;

      if (modalWrapperElement) {
        modalWrapperElement.focus();
      }
    }

    if (prevProps.isOpen !== this.props.isOpen) {
      if (this.props.isOpen) {
        document.body.classList.add('noscroll');
      } else {
        document.body.classList.remove('noscroll');
      }
    }
  }

  reset() {
    try {
      document.body.classList.remove('noscroll');
      this.watchOverflow(0);
    } catch (err) {
      // do nothing
    }
  }

  handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Escape') {
      event.preventDefault();

      this.onCloseDrawer();
    }
  }

  onCloseDrawer() {
    this.props.onClose();
  }

  watchOverflow(position: number) {
    if (position > 0.05) {
      this.setState({ overflow: true });
    } else {
      this.setState({ overflow: false });
    }
  }

  getContextAPI() {
    return {
      overflow: this.state.overflow,
      watchOverflow: this.watchOverflow,
      onClose: this.onCloseDrawer
    };
  }

  render() {
    const wrapper = (
      <>
        {this.props.backdrop && (
          <DrawerOverlay
            className={classnames(this.state.isOpen && 'is-open')}
            onClick={
              this.props.backdrop === true ? this.onCloseDrawer : undefined
            }
          />
        )}
        <Theme values={theme}>
          {themeAttributes => (
            <FocusLock disabled={!this.state.isOpen}>
              <DrawerWrapper
                innerRef={this.drawerWrapperRef}
                tabIndex={-1}
                theme={themeAttributes}
                className={classnames(
                  this.state.isOpen ? 'is-open' : 'is-closed',
                  this.props.className
                )}
                onKeyDown={this.handleKeyDown}
              >
                <DrawerContext.Provider value={this.getContextAPI()}>
                  {this.state.isOpen && this.props.children}
                </DrawerContext.Provider>
              </DrawerWrapper>
            </FocusLock>
          )}
        </Theme>
      </>
    );
    return createPortal(wrapper, this.el);
  }
}

export default Drawer;

const DrawerOverlay = styled('div')`
  ${DrawerOverlayStyles};
`;

const DrawerWrapper = styled('div')`
  ${(props: WithThemeProps<DrawerProps>) => DrawerBase(props)};
  ${DrawerRight};
`;
