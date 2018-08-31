import React, { Fragment } from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';
import classnames from 'classnames';

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
  isOpen: boolean;
  backdrop?: true | false | 'static';
  className?: string;
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

  el: HTMLDivElement;

  constructor(props: DrawerProps) {
    super(props);
    this.el = document.createElement('div');
    this.state = {
      isOpen: props.isOpen,
      overflow: false
    };

    this.bindHandlers();
  }

  bindHandlers() {
    this.watchOverflow = this.watchOverflow.bind(this);
    this.onCloseDrawer = this.onCloseDrawer.bind(this);
    this.getContextAPI = this.getContextAPI.bind(this);
  }

  componentDidMount() {
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    this.reset();
    document.body.removeChild(this.el);
  }

  componentWillReceiveProps(next: DrawerProps) {
    if (this.props.isOpen !== next.isOpen) {
      this.setState({ isOpen: next.isOpen });
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

  reset = () => {
    try {
      document.body.classList.remove('noscroll');
      this.watchOverflow(0);
    } catch (err) {
      // do nothing
    }
  };

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
      <Fragment>
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
            <DrawerWrapper
              theme={themeAttributes}
              className={classnames(
                this.state.isOpen ? 'is-open' : 'is-closed',
                this.props.className
              )}
            >
              <DrawerContext.Provider value={this.getContextAPI()}>
                {this.state.isOpen && this.props.children}
              </DrawerContext.Provider>
            </DrawerWrapper>
          )}
        </Theme>
      </Fragment>
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
