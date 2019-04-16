import React, { Fragment } from 'react';
import classNames from 'classnames';
import styled from 'styled-components';

import { variables } from '@kata-kit/theme';

import ButtonBase from '../styles';
import { darken } from 'polished';

export interface IconicButtonProps {
  /** Whether the button is disabled or not. */
  disabled?: boolean;
  /** The color variant of the button. */
  variant?: 'default' | 'primary' | 'danger';
  /** The button size. */
  size?: 'md' | 'sm';
  /** Additional CSS classes to give to the button. */
  className?: string;
  /** Additional CSS styles to give to the button. */
  style?: React.CSSProperties;
  /** Event handler triggered during `onClick`. */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** Is a block button. */
  block?: boolean;
  /** Triggers the loading state of the button. */
  loading?: boolean;
}

class IconicButton extends React.Component<IconicButtonProps> {
  static defaultProps = {
    block: false,
    active: false,
    disabled: false,
    outline: false,
    size: 'md',
    variant: 'default'
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
      block,
      disabled,
      loading,
      variant,
      ...props
    } = this.props;

    const classes = classNames(variant, className);

    return (
      <IconicButtonWrapper
        type="button"
        {...props}
        className={classes}
        onClick={this.onClick}
        disabled={disabled}
      >
        {loading ? (
          <Fragment>
            <span className="invisible">{this.props.children}</span>
          </Fragment>
        ) : (
          this.props.children
        )}
      </IconicButtonWrapper>
    );
  }
}

const IconicButtonWrapper = styled('button')`
  ${ButtonBase}
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${props => (props.size === 'sm' ? '8px 16px' : '10px 24px')};
  width: ${props => (props.block ? '100%' : 'auto')};
  height: ${props => (props.size === 'sm' ? '32px' : '40px')};
  border-radius: 6px;
  font-weight: 700;
  font-size: 13px;
  line-height: 1.45;

  color: ${variables.colors.gray70};
  border: 1px solid ${variables.colors.gray30};
  background: ${variables.colors.white};

  &.primary {
    color: ${variables.colors.kataBlue};

    &:not(:disabled):not(.disabled) {
      &:hover {
        color: ${variables.colors.darkKataBlue};
      }

      &:focus {
        color: ${variables.colors.white};
        background-color: ${variables.colors.gray70};
      }
    }
  }

  &.danger {
    color: ${variables.colors.red};

    &:not(:disabled):not(.disabled) {
      &:hover {
        color: ${darken(0.15, variables.colors.red)};
      }

      &:focus {
        color: ${variables.colors.white};
        background-color: ${variables.colors.gray70};
      }
    }
  }

  &:disabled,
  &.disabled {
    background: ${variables.colors.gray10};
    color: ${variables.colors.gray50};
  }

  &:not(:disabled):not(.disabled) {
    &:hover {
      background-color: ${variables.colors.gray10};
      color: ${variables.colors.gray70};
    }

    &:focus {
      box-shadow: unset;

      color: ${variables.colors.white};
      background-color: ${variables.colors.gray70};
    }
  }

  i::before {
    height: unset;
    line-height: unset;
  }
`;

export default IconicButton;
