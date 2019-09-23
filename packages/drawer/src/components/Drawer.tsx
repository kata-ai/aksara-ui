import * as React from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';
import classnames from 'classnames';

import { Theme } from '@kata-kit/theme';
import { FocusTrap } from '@kata-kit/common';

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
   * Set to `'static'` to make the overlay backdrop unclickable. (deprecated)
   */
  backdrop?: true | false | 'static';
  /**
   * Set to `true` to enable closing the drawer by clicking the overlay.
   */
  isOverlayClickable?: boolean;
  /** Enables focus trap mode. */
  enableFocusTrap?: boolean;
  /** Additional CSS classes to give to the drawer. */
  className?: string;
  /** Used to reference the ID of the title element in the drawer */
  labelledById?: string;
  /** Callback method run when the "Close Drawer" button is clicked. */
  onClose(): void;
}

export interface DrawerState {
  isOpen: boolean;
  overflow: boolean;
}

class Drawer extends React.Component<DrawerProps, DrawerState> {
  static defaultProps = {
    backdrop: 'static',
    isOverlayClickable: false,
    enableFocusTrap: false
  };

  el: HTMLDivElement | undefined = undefined;

  constructor(props: DrawerProps) {
    super(props);
    this.el = document.createElement('div');
    this.state = {
      isOpen: props.isOpen,
      overflow: false
    };

    this.watchOverflow = this.watchOverflow.bind(this);
    this.handleCloseDrawer = this.handleCloseDrawer.bind(this);
    this.handleDrawerOverlayClick = this.handleDrawerOverlayClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  static getDerivedStateFromProps(props: DrawerProps, state: DrawerState) {
    return {
      isOpen: props.isOpen
    };
  }

  componentDidMount() {
    if (this.el) {
      document.body.appendChild(this.el);
    }
  }

  componentWillUnmount() {
    this.reset();

    if (this.el) {
      document.body.removeChild(this.el);
    }
  }

  componentDidUpdate(prev: DrawerProps) {
    if (prev.isOpen !== this.props.isOpen) {
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
      this.handleCloseDrawer();
    }
  }

  handleCloseDrawer() {
    this.props.onClose();
  }

  handleDrawerOverlayClick(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();

    if (this.props.backdrop !== 'static' || this.props.isOverlayClickable) {
      this.handleCloseDrawer();
    }
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
      labelledById: this.props.labelledById,
      watchOverflow: this.watchOverflow,
      onClose: this.handleCloseDrawer
    };
  }

  render() {
    const {
      enableFocusTrap,
      className,
      backdrop,
      labelledById,
      children
    } = this.props;
    const { isOpen } = this.state;
    let wrapper: JSX.Element;

    if (enableFocusTrap) {
      wrapper = (
        <FocusTrap active={isOpen} onKeyDown={this.handleKeyDown}>
          {backdrop && (
            <DrawerOverlay
              className={classnames(isOpen && 'is-open')}
              onClick={this.handleDrawerOverlayClick}
            />
          )}
          <Theme values={theme}>
            {themeAttributes => (
              <DrawerWrapper
                data-testid="Drawer-wrapper"
                theme={themeAttributes}
                className={classnames(
                  isOpen ? 'is-open' : 'is-closed',
                  className
                )}
                role="dialog"
                aria-modal="true"
                aria-labelledby={labelledById}
                onKeyDown={this.handleKeyDown}
              >
                <DrawerContext.Provider value={this.getContextAPI()}>
                  {isOpen && children}
                </DrawerContext.Provider>
              </DrawerWrapper>
            )}
          </Theme>
        </FocusTrap>
      );
    } else {
      wrapper = (
        <>
          {backdrop && (
            <DrawerOverlay
              className={classnames(isOpen && 'is-open')}
              onClick={this.handleDrawerOverlayClick}
            />
          )}
          <Theme values={theme}>
            {themeAttributes => (
              <DrawerWrapper
                data-testid="Drawer-wrapper"
                theme={themeAttributes}
                className={classnames(
                  isOpen ? 'is-open' : 'is-closed',
                  className
                )}
                tabIndex={-1}
                role="dialog"
                aria-modal="true"
                aria-labelledby={labelledById}
                onKeyDown={this.handleKeyDown}
              >
                <DrawerContext.Provider value={this.getContextAPI()}>
                  {isOpen && children}
                </DrawerContext.Provider>
              </DrawerWrapper>
            )}
          </Theme>
        </>
      );
    }

    if (this.el) {
      return createPortal(wrapper, this.el);
    }

    return null;
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
