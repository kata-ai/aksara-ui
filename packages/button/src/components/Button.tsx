import * as React from 'react';
import styled, { css } from 'styled-components';
import classnames from 'classnames';
import { darken } from 'polished';

import { Circle } from '@kata-kit/loading';
import ThemedComponent, { ThemeAttributes, variables } from '@kata-kit/theme';
import themes from '../theme';

import ButtonBase, { ButtonBaseProps } from '../styles';

// TODO items:
// - Cannot extend button below in other packages using `styled-components`, so
//   styles specific to `@kata-kit/pagination` is still extended here.
//   Possible solution: upgrade to `styled-components@^3.4.0`.

export type ButtonColors =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'white';

export type ButtonSizes = 'lg' | 'sm';

export interface ButtonProps
  extends ButtonBaseProps,
    React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  color?: ButtonColors;
  size?: ButtonSizes;
  isIcon?: boolean;
  className?: string;
  onClick?: any;
  type?: string;
  active?: boolean;
  loading?: boolean;
  outline?: boolean;
}

class Button extends React.Component<ButtonProps> {
  static defaultProps = {
    color: 'secondary' as ButtonColors,
    type: 'button',
    size: 'lg' as ButtonSizes,
    block: false,
    active: false,
    disabled: false,
    outline: false
  };

  constructor(props: ButtonProps) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e: React.MouseEvent<HTMLButtonElement>) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  render() {
    const {
      className,
      color,
      type,
      loading,
      disabled,
      isIcon,
      children,
      ...props
    } = this.props;

    return (
      <ThemedComponent color={color} themes={themes.button}>
        {themeAttributes => (
          <ButtonWrapper
            className={classnames(isIcon && 'icon', className)}
            type={type}
            onClick={this.onClick}
            disabled={disabled || loading}
            color={color}
            isIcon={isIcon}
            {...props}
            {...themeAttributes}
          >
            {loading ? (
              <>
                <LoaderCircle
                  className={classnames(color, className)}
                  size={30}
                />
                <InvisibleText>{children}</InvisibleText>
              </>
            ) : (
              children
            )}
          </ButtonWrapper>
        )}
      </ThemedComponent>
    );
  }
}

export default Button;

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

const isIconStyles = css`
  ${LoaderCircle} {
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;

    svg {
      width: 24px;
      height: 24px;
    }

    svg path,
    svg rect {
      fill: ${variables.colors.kataBlue};
    }
  }
`;

const InvisibleText = styled('span')`
  visibility: hidden;
`;

const ButtonWrapper = styled<ButtonProps & ThemeAttributes, 'button'>('button')`
  ${props => ButtonBase(props)};
  padding: ${props => (props.size === 'sm' ? '8px 16px' : '10px 24px')};
  height: ${props => (props.size === 'sm' ? '32px' : '40px')};
  font-size: ${props => (props.size === 'sm' ? '11px' : '1rem')};
  font-weight: ${props => (props.size === 'sm' ? '700' : '500')};
  line-height: ${props => (props.size === 'sm' ? '16px !important' : '20px')};
  border-radius: 4px;
  line-height: 1.538rem;

  &:not(:disabled):not(.disabled) {
    color: ${props => props.textColor};
    border-color: ${props => props.borderColor};
    background-color: ${props =>
      props.isIcon ? 'transparent' : props.backgroundColor};

    &:hover {
      color: ${props => props.linkColorHover};
      border-color: ${props => props.borderColorHover};
      background-color: ${props => props.backgroundColorHover};
    }

    &:active,
    &.active {
      color: ${props => props.linkColorActive};
      border-color: ${props => props.borderColorActive};
      background-color: ${props => props.backgroundColorActive};
    }
  }

  &:disabled,
  &.disabled {
    background-color: ${props =>
      props.isIcon ? props.backgroundColorHover : '#c2c7c8'};
    border-color: ${props =>
      props.isIcon ? 'transparent' : darken(0.1, '#c2c7c8')};

    &:hover {
      background-color: ${props =>
        props.isIcon ? props.backgroundColorHover : '#c2c7c8'};
      border-color: ${props =>
        props.isIcon ? 'transparent' : darken(0.1, '#c2c7c8')};
    }
  }

  ${props => props.isIcon && isIconStyles};
`;
