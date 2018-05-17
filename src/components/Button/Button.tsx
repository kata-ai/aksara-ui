import React, { Fragment } from 'react';
import classNames from 'classnames';

import { Circle } from '../Loading';

type Color =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'white';

interface Props {
  disabled?: boolean;
  color?: Color;
  size?: 'lg' | 'sm' | '';
  isIcon?: boolean;
  className?: string;
  onClick?: any;
  type?: 'button' | 'submit';
  block?: boolean;
  active?: boolean;
  loading?: boolean;
  outline?: boolean;
  children: any;
}

class Button extends React.Component<Props> {
  static defaultProps = {
    color: 'secondary',
    type: 'button',
    block: false,
    active: false,
    disabled: false,
    outline: false
  };

  onClick = e => {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  };

  render() {
    const {
      className,
      size,
      color,
      type,
      block,
      active,
      loading,
      disabled,
      isIcon,
      outline,
      ...props
    } = this.props;

    const classes = classNames(
      'btn',
      'kata-btn',
      `kata-btn__${color}`,
      `btn${outline ? '-outline' : ''}-${color}`,
      size ? `btn-${size}` : false,
      block ? `btn-block` : false,
      {
        active,
        'position-relative': loading,
        'kata-btn-icon': isIcon
      },
      className
    );

    return (
      <button
        type={type}
        {...props}
        className={classes}
        onClick={this.onClick}
        disabled={disabled || loading}
      >
        {loading ? (
          <Fragment>
            <Circle size={30} />
            <span className="invisible">{this.props.children}</span>
          </Fragment>
        ) : (
          this.props.children
        )}
      </button>
    );
  }
}

export default Button;
