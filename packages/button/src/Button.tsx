import React, { Fragment } from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import { darken } from 'polished';

import { Circle } from '@kata-kit/loading';

// TODO items:
// - Cannot extend button below in other packages using `styled-components`, so
//   styles specific to `@kata-kit/pagination` is still extended here.
//   Possible solution: upgrade to `styled-components@^3.4.0`.

export type ButtonAppearance =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'white';

export interface ButtonProps {
  disabled?: boolean;
  appearance?: ButtonAppearance;
  size?: 'lg' | 'sm' | '';
  isIcon?: boolean;
  className?: string;
  onClick?: any;
  type?: string;
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
      appearance,
      type,
      block,
      active,
      loading,
      disabled,
      isIcon,
      outline,
      children,
      ...props
    } = this.props;

    return (
      <ButtonWrapper
        className={classnames(appearance, className)}
        type={type}
        onClick={this.onClick}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <Fragment>
            <LoaderCircle
              className={classnames(appearance, className)}
              size={30}
            />
            <InvisibleText>{children}</InvisibleText>
          </Fragment>
        ) : (
          children
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

  &.white {
    border: 1px solid #e2e6e8 /* $gray-30 */;
    color: #484c4f /* $gray-70 */;
    background-color: #fff /* $white */;

    &:hover {
      color: #484c4f /* $gray-70 */;
      background-color: #f6f7f8 /* $gray-10 */;
    }

    &:active {
      color: #fff /* $white */;
      background-color: #484c4f /* $gray-70 */ !important;
    }
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

  .white {
    svg path,
    svg rect {
      fill: #484c4f /* $gray-70 */;
    }
  }
`;

const InvisibleText = styled('span')`
  visibility: hidden;
`;
