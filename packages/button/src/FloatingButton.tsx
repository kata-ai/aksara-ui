import React, { Fragment } from 'react';
import classNames from 'classnames';
import styled, { keyframes } from 'styled-components';

import { Circle } from '@kata-kit/loading';
import { colors, layerShadows, transitions } from '@kata-kit/variables';

import ButtonWrapper from './ButtonWrapper';

export type FloatingButtonColor = 'primary' | 'success' | 'danger' | 'warning';

export interface FloatingButtonProps {
  disabled?: boolean;
  color?: FloatingButtonColor;
  icon?: string;
  size?: 'lg' | 'sm' | '';
  className?: string;
  onClick?: any;
  type?: 'button' | 'submit';
  active?: boolean;
  isLoading?: boolean;
}

class FloatingButton extends React.Component<FloatingButtonProps> {
  static defaultProps = {
    color: 'primary',
    type: 'button',
    active: false,
    disabled: false
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
      <FloatingButtonWrapper
        type={type}
        className={classes}
        onClick={this.onClick}
        disabled={disabled}
        {...props}
      >
        {isLoading ? (
          <Fragment>
            <LoaderCircle size={40} />
          </Fragment>
        ) : (
          <i className={`icon-${icon}`} />
        )}
      </FloatingButtonWrapper>
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

const FloatingButtonWrapper = styled(ButtonWrapper)`
  height: 40px;
  width: 40px;
  font-weight: 500;
  border-radius: 50%;
  line-height: 1;
  box-shadow: ${layerShadows.layer200Shadow};
  font-size: 16px;
  vertical-align: middle;
  color: ${colors.gray60};
  background: ${colors.white};
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;

  animation: ${popIn} ${transitions.transitionFast}
    ${transitions.transitionEasing};

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
      color: ${colors.kataBlue};
    }
  }

  &.success {
    &:hover,
    &:active {
      color: ${colors.green};
    }
  }

  &.danger {
    &:hover,
    &:active {
      color: ${colors.red};
    }
  }

  &.warning {
    &:hover,
    &:active {
      color: ${colors.yellow};
    }
  }

  &:disabled,
  &[disabled] {
    background: ${colors.gray10};
    &:hover {
      color: ${colors.gray60};
    }
  }

  &.icon {
    height: 32px;
    width: 32px;
    padding: 8px;
    text-align: center;
    background: none;
  }
`;

const LoaderCircle = styled(Circle)`
  position: absolute;
  top: 0;
  left: -1px;
`;
