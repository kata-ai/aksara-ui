import * as React from 'react';
import styled, { css } from 'styled-components';
import classnames from 'classnames';
import { darken } from 'polished';

import { Circle } from '@kata-kit/loading';
import ThemedComponent, { variables } from '@kata-kit/theme';
import themes from '../theme';

import ButtonBase from '../styles';
import { InvisibleText } from '../helpers';

// TODO items:
// - Cannot extend button below in other packages using `styled-components`, so
//   styles specific to `@kata-kit/pagination` is still extended here.
//   Possible solution: upgrade to `styled-components@^3.4.0`.

export type ButtonColors = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'white';

export type ButtonSizes = 'lg' | 'sm';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /** Whether the button is disabled or not. */
  disabled?: boolean;
  /** The color of the button. */
  color?: ButtonColors;
  /** The size of the button. */
  size?: ButtonSizes;
  /** Is a block button. */
  block?: boolean;
  /** Whether the button is an icon button or not. */
  isIcon?: boolean;
  /** Additional CSS classes to give to the button. */
  className?: string;
  /** Event handler triggered during `onClick`. */
  onClick?: any;
  /** The HTML type of the button. */
  type?: string;
  /**
   * (Deprecated) Whether the button is active or not.
   */
  active?: boolean;
  /** Triggers the loading state of the button. */
  loading?: boolean;
  /** (Deprecated) If the button is an outline button, define it here. */
  outline?: boolean;
}

/**
 * Buttons express what action will occur when the user clicks or touches it.
 * Buttons are used to initialize an action, either in the background or
 * foreground of an experience.
 */
export class Button extends React.Component<ButtonProps> {
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
    const { className, color, type, loading, disabled, isIcon, children, ...props } = this.props;

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
                <LoaderCircle className={classnames(color, className)} size={30} />
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

export const ButtonWrapper = styled('button')`
  ${props => ButtonBase(props)};
  width: ${props => (props.block ? '100%' : 'auto')};
  padding: ${props => (props.size === 'sm' ? '8px 16px' : '10px 24px')};
  height: ${props => (props.size === 'sm' ? '32px' : '40px')};
  font-weight: ${props => (props.size === 'sm' ? '700' : '500')};
  border-radius: 4px;

  &:not(:disabled):not(.disabled) {
    color: ${props => props.textColor};
    border-color: ${props => props.borderColor};
    background-color: ${props => (props.isIcon ? 'transparent' : props.backgroundColor)};

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
    background-color: ${props => (props.isIcon ? props.backgroundColorHover : '#c2c7c8')};
    border-color: ${props => (props.isIcon ? 'transparent' : darken(0.1, '#c2c7c8'))};
    color: ${variables.colors.white};
    opacity: 0.65;

    &:hover {
      background-color: ${props => (props.isIcon ? props.backgroundColorHover : '#c2c7c8')};
      border-color: ${props => (props.isIcon ? 'transparent' : darken(0.1, '#c2c7c8'))};
    }
  }

  ${props => props.isIcon && isIconStyles};
`;
