import React, { Fragment } from 'react';
import classNames from 'classnames';
import styled from 'styled-components';

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
      <ButtonWrapper
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
      </ButtonWrapper>
    );
  }
}

const ButtonWrapper = styled<ButtonProps, 'button'>('button')`
  display: inline-block;
  border: none;
  padding: 10px 24px;
  height: 40px;
  font-weight: 500;
  letter-spacing: 0.2px;
  border-radius: 4px;
  line-height: 1.538rem;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s ease;

  colors &:not([disabled]) {
    cursor: pointer;
  }

  &:disabled {
    background: #c2c7c8;
    border: solid 1px darken(#c2c7c8, 10%);

    &:hover {
      background: #c2c7c8;
      border: solid 1px darken(#c2c7c8, 10%);
    }
  }
`;
