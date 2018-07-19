import React, { Fragment } from 'react';
import classNames from 'classnames';

import styles from './Button.st.css';

// import { Circle } from '@kata-kit/loading';

export type ButtonColors =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'white';

export interface ButtonProps {
  disabled?: boolean;
  color?: ButtonColors;
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

export class Button extends React.Component<ButtonProps> {
  static defaultProps = {
    color: 'secondary',
    type: 'button',
    block: false,
    active: false,
    disabled: false,
    outline: false
  };

  onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
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
      styles.root,
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
            {/* <Circle size={30} /> */}
            <span className="invisible">{this.props.children}</span>
          </Fragment>
        ) : (
          this.props.children
        )}
      </button>
    );
  }
}
