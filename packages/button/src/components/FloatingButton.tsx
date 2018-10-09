import * as React from 'react';
import classNames from 'classnames';
import styled, { keyframes } from 'styled-components';

import ThemedComponent from '@kata-kit/theme';
import { Circle } from '@kata-kit/loading';
import { variables } from '@kata-kit/theme';

import themes from '../theme';
import ButtonBase from '../styles';

export type FloatingButtonColor = 'primary' | 'success' | 'danger' | 'warning';

export interface FloatingButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  /** Whether the button is disabled or not. */
  disabled?: boolean;
  /** The color of the button. */
  color?: FloatingButtonColor;
  /** Icon of the button */
  icon?: string;
  /** The size of the button. */
  size?: 'lg' | 'sm' | '';
  /** Additional CSS classes to give to the button. */
  className?: string;
  /** `onClick` event handler. */
  onClick?: any;
  /** The HTML type of the button. */
  type?: 'button' | 'submit';
  /** (Deprecated) Whether the button is active or not. */
  active?: boolean;
  /** Triggers the loading state of the button. */
  isLoading?: boolean;
}

/**
 * Floating buttons are buttons with styles similar to that of cards, hence
 * "floating".
 */
export class FloatingButton extends React.Component<FloatingButtonProps> {
  static defaultProps = {
    color: 'primary',
    type: 'button',
    active: false,
    disabled: false
  };

  constructor(props: FloatingButtonProps) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e: React.SyntheticEvent) {
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
      icon,
      size,
      color,
      type,
      active,
      disabled,
      isLoading,
      ...props
    } = this.props;

    const classes = classNames(color, active, className);

    return (
      <ThemedComponent themes={themes.button}>
        {themeAttributes => (
          <FloatingButtonWrapper
            type={type}
            className={classes}
            onClick={this.onClick}
            disabled={disabled}
            {...props}
            {...themeAttributes}
          >
            {isLoading ? (
              <>
                <LoaderCircle size={40} />
              </>
            ) : (
              <i className={`icon-${icon}`} />
            )}
          </FloatingButtonWrapper>
        )}
      </ThemedComponent>
    );
  }
}

export default FloatingButton;

const popIn = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

const FloatingButtonWrapper = styled('button')`
  ${ButtonBase} height: 40px;
  width: 40px;
  font-weight: 500;
  border-radius: 50%;
  line-height: 1;
  box-shadow: ${variables.layerShadows.layer200Shadow};
  font-size: 16px;
  vertical-align: middle;
  color: ${variables.colors.gray60};
  background: ${variables.colors.white};
  align-items: center;
  justify-content: center;
  position: relative;

  animation: ${popIn} ${variables.transitions.transitionFast}
    ${variables.transitions.transitionEasing};

  &:focus {
    box-shadow: ${variables.layerShadows.layer200Shadow};
  }

  &.focus {
    box-shadow: ${variables.layerShadows.layer200Shadow};
  }

  &.corner-right {
    position: absolute;
    top: -16px;
    right: -16px;
  }

  i::before {
    vertical-align: middle;
  }

  &.primary {
    &:hover,
    &:active {
      color: ${variables.colors.kataBlue};
    }
  }

  &.success {
    &:hover,
    &:active {
      color: ${variables.colors.green};
    }
  }

  &.danger {
    &:hover,
    &:active {
      color: ${variables.colors.red};
    }
  }

  &.warning {
    &:hover,
    &:active {
      color: ${variables.colors.yellow};
    }
  }

  &:disabled,
  &.disabled {
    background-color: ${variables.colors.gray10};
    color: ${variables.colors.gray60};

    &:hover {
      color: ${variables.colors.gray60};
    }
  }
`;

const LoaderCircle = styled(Circle)`
  position: absolute;
  top: 0;
  left: -1px;
`;
