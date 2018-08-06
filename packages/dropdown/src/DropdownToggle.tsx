import React, { Fragment } from 'react';
import omit from 'lodash-es/omit';
import classNames from 'classnames';

import { Button, ButtonColors } from '@kata-kit/button';

interface Props {
  tag?: any;
  caret?: boolean;
  className?: string;
  color?: ButtonColors;

  // Private properties, should not be used publicly
  block?: boolean;
  isOpen?: boolean;
  direction?: 'up' | 'down' | 'left' | 'right';
  toggle?: (e: React.SyntheticEvent<any>) => void;
}

const Caret = () => <i className="kata-drop-toggle icon-arrow" />;

class DropdownToggle extends React.Component<Props> {
  static defaultProps = {
    tag: 'button',
    caret: true
  };

  static displayName = 'DropdownToggle';

  onClick = e => {
    e.stopPropagation();
    if (this.props.toggle) {
      this.props.toggle(e);
    }
  };

  renderChildren = () => {
    const { caret, direction, children } = this.props;
    if (!caret) {
      return children;
    }
    if (direction === 'left') {
      return (
        <Fragment>
          <Caret /> {children}
        </Fragment>
      );
    }
    return (
      <Fragment>
        {children}
        <Caret />
      </Fragment>
    );
  };

  render() {
    const { tag, children, caret, className, block, isOpen, ...props } = omit(
      this.props,
      ['direction', 'toggle']
    );

    if (!React.isValidElement(children)) {
      return (
        <Button
          {...props}
          className={`btn-block
          ${isOpen ? 'kata-dropdown--menu-open' : ''}
          ${className || ''}`}
          color={this.props.color}
          onClick={this.onClick}
        >
          {this.renderChildren()}
        </Button>
      );
    }

    return (
      <div
        {...props}
        className={classNames(
          {
            'kata-dropdown--menu-open': this.props.isOpen
          },
          className
        )}
        onClick={this.onClick}
      >
        {this.renderChildren()}
      </div>
    );
  }
}

export default DropdownToggle;
