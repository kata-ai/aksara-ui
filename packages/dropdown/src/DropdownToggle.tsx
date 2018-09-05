import React, { Fragment } from 'react';
import omit from 'lodash-es/omit';
import classNames from 'classnames';

import { Button, ButtonColors, ButtonSizes } from '@kata-kit/button';

type DropdownDirection = 'up' | 'down' | 'left' | 'right';

interface DropdownToggleProps {
  tag?: any;
  caret?: boolean;
  className?: string;
  color?: ButtonColors;
  size?: ButtonSizes;

  // Private properties, should not be used publicly
  block?: boolean;
  isOpen?: boolean;
  direction?: DropdownDirection;
  toggle?: (e: React.SyntheticEvent<any>) => void;
}

const Caret = () => <i className="kata-drop-toggle icon-arrow" />;

class DropdownToggle extends React.Component<DropdownToggleProps> {
  static defaultProps = {
    tag: 'button',
    caret: true
  };

  static displayName = 'DropdownToggle';

  constructor(props: DropdownToggleProps) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.renderChildren = this.renderChildren.bind(this);
  }

  onClick(e: React.SyntheticEvent) {
    e.stopPropagation();

    if (this.props.toggle) {
      this.props.toggle(e);
    }
  }

  private renderChildren() {
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
  }

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

    const classes = classNames(
      {
        'kata-dropdown--menu-open': this.props.isOpen
      },
      className
    );

    return (
      <div {...props} className={classes} onClick={this.onClick}>
        {this.renderChildren()}
      </div>
    );
  }
}

export default DropdownToggle;
