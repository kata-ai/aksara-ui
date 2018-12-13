import React, { Fragment } from 'react';
import classNames from 'classnames';
import styled from 'styled-components';

import { Circle } from '@kata-kit/loading';
import { variables } from '@kata-kit/theme';

import ButtonBase from '../styles';
import { InvisibleText } from '../helpers';

export interface HollowButtonProps {
  disabled?: boolean;
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

class HollowButton extends React.Component<HollowButtonProps> {
  static defaultProps = {
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
    const { className, size, block, disabled, loading, ...props } = this.props;

    const classes = classNames(className);

    return (
      <HollowButtonWrapper
        type="button"
        {...props}
        className={classes}
        onClick={this.onClick}
        disabled={disabled || loading}
      >
        {loading ? (
          <Fragment>
            <LoaderCircle size={30} />
            <InvisibleText>{this.props.children}</InvisibleText>
          </Fragment>
        ) : (
          this.props.children
        )}
      </HollowButtonWrapper>
    );
  }
}

const HollowButtonWrapper = styled('button')`
  ${ButtonBase}
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${props => (props.size === 'sm' ? '8px 16px' : '10px 24px')};
  height: ${props => (props.size === 'sm' ? '32px' : '40px')};
  border-radius: 6px;
  font-weight: 700;
  font-size: 13px;
  line-height: 1.45;

  color: ${variables.colors.gray70};
  border: 1px solid ${variables.colors.gray30};
  background: #fff;

  &:disabled,
  &.disabled {
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

const LoaderCircle = styled(Circle)`
  position: absolute;
  left: 50%;
  margin-left: -16px;
`;

export default HollowButton;
