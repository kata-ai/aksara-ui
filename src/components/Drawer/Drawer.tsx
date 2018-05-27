import React, { Fragment } from 'react';
import { createPortal } from 'react-dom';
import classnames from 'classnames';

import DrawerContext from './DrawerContext';

export interface Props {
  children?: any;
  isOpen: boolean;
  noBackdrop?: boolean;
  className?: string;
  onClose(): void;
}
export interface State {
  isOpen: boolean;
  overflow: boolean;
}

import './Drawer.scss';

class Drawer extends React.Component<Props, State> {
  el: any;
  constructor(props: Props) {
    super(props);
    this.el = document.createElement('div');
    this.state = {
      isOpen: props.isOpen,
      overflow: false
    };
  }

  componentDidMount() {
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    this.reset();
    document.body.removeChild(this.el);
  }

  componentWillReceiveProps(next: Props) {
    if (this.props.isOpen !== next.isOpen) {
      this.setState({ isOpen: next.isOpen });
    }
  }

  componentDidUpdate(prev: Props) {
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

  onCloseDrawer = () => {
    this.props.onClose();
  };

  watchOverflow = (position: number) => {
    if (position > 0.05) {
      this.setState({ overflow: true });
    } else {
      this.setState({ overflow: false });
    }
  };

  getContextAPI = () => {
    return {
      overflow: this.state.overflow,
      watchOverflow: this.watchOverflow,
      onClose: this.onCloseDrawer
    };
  };

  render() {
    const wrapper = (
      <Fragment>
        {!this.props.noBackdrop && (
          <div
            className={`${this.state.isOpen ? 'kata-drawer__overlay' : ''}`}
            onClick={this.onCloseDrawer}
          />
        )}
        <div
          className={classnames(
            'kata-drawer kata-drawer__right drawer-lg-10',
            this.state.isOpen ? 'kata-drawer--open' : 'kata-drawer--close',
            this.props.className
          )}
        >
          <DrawerContext.Provider value={this.getContextAPI()}>
            {this.state.isOpen && this.props.children}
          </DrawerContext.Provider>
        </div>
      </Fragment>
    );
    return createPortal(wrapper, this.el);
  }
}

export default Drawer;
