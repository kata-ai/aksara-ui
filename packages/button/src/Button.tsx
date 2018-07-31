import React, { Fragment } from 'react';

import styles from './Button.st.css';

// FIXME: This errors because of our tsconfig path options. Should we:
// A. use separate tsconfig file between referencing each package in monorepo
//    and for building the project itself, or
// B. give up altogether and just write the typings manually?
//
// ALSO: should we make this a peerdep?
import { Circle } from '@kata-kit/loading';

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

class Button extends React.Component<ButtonProps> {
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

    return (
      <button
        {...styles(
          'root',
          {
            primary: color === 'primary',
            secondary: color === 'secondary',
            danger: color === 'danger'
          },
          this.props
        )}
        type={type}
        onClick={this.onClick}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <Fragment>
            <Circle className={styles.loaderCircle} size={30} />
            <span className={styles.btnTextInvisible}>
              {this.props.children}
            </span>
          </Fragment>
        ) : (
          this.props.children
        )}
      </button>
    );
  }
}

export default Button;
