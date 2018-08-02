import React, { Fragment } from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import { darken } from 'polished';

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
      <ButtonWrapper
        className={classnames(color)}
        type={type}
        onClick={this.onClick}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <Fragment>
            <LoaderCircle size={30} />
            <InvisibleText>{this.props.children}</InvisibleText>
          </Fragment>
        ) : (
          this.props.children
        )}
      </ButtonWrapper>
    );
  }
}

export default Button;

const ButtonWrapper = styled<ButtonProps, 'button'>('button')`
  display: ${props => (props.block ? 'block' : 'inline-block')};
  position: relative;
  border: none;
  padding: 10px 24px;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.2px;
  border-radius: 4px;
  line-height: 1.538rem;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s ease;

  &:not([disabled]) {
    cursor: pointer;
  }

  &[disabled] {
    background: #c2c7c8 !important;
    border: solid 1px ${darken(0.1, '#c2c7c8')} !important;

    &:hover {
      background: #c2c7c8 !important;
      border: solid 1px ${darken(0.1, '#c2c7c8')} !important;
    }
  }

  &.primary {
    background-color: #2053af; /* $cobalt */
    border-color: #2053af; /* $cobalt */
    color: #fff; /* $white */

    &:hover,
    &:active {
      color: #fff; /* $white */
      background-color: #2662cf; /* $semi-cobalt */
    }
  }

  &.secondary {
    border: none;
    color: #949a9d /* $gray-50 */;
    background-color: #f6f7f8 /* $gray-10 */;

    &:hover {
      color: #949a9d /* $gray-50 */;
      background-color: #edf1f2 /* $gray-20 */;
    }

    &:active {
      color: #fff /* $white */;
      background-color: #484c4f /* $gray-70 */;
    }
  }

  &.danger {
    border: none;
    color: #fff /* $white */;
    background-color: #e53935 /* $red */;
  }
`;

const LoaderCircle = styled(Circle)`
  margin: -6px 0;
  position: absolute;
  left: 50%;
  margin-left: -15px;

  svg path,
  svg rect {
    fill: #fff /* $white */;
  }
`;

const InvisibleText = styled('span')`
  visibility: hidden;
`;
