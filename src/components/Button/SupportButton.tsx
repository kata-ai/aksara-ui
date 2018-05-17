import React, { Fragment } from 'react';
import classNames from 'classnames';

import { Circle } from '../Loading';

interface Props {
  disabled?: boolean;
  size?: 'lg' | 'sm' | '';
  isIcon?: boolean;
  className?: string;
  onClick?: any;
  block?: boolean;
  active?: boolean;
  outline?: boolean;
  loading?: boolean;
  children: any;
}

class Button extends React.Component<Props> {
  static defaultProps = {
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
      block,
      active,
      disabled,
      isIcon,
      outline,
      loading,
      ...props
    } = this.props;

    const classes = classNames(
      'btn',
      'kata-btn__support',
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
        type="button"
        {...props}
        className={classes}
        onClick={this.onClick}
        disabled={disabled}
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
