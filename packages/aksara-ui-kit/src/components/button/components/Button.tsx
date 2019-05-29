import * as React from 'react';
import styled, { css } from 'styled-components';
import { ButtonBaseProps, ButtonBase, SizeSmall, SizeMedium, SizeLarge } from '../styles';
import { colors } from '../../../utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonBaseProps {
  /** Additional CSS classes to give to the component */
  className?: string;
  /** Additional CSS styles to give to the component */
  style?: React.CSSProperties;
}

const DefaultButton = css`
  background-color: ${colors.grey02};
  color: ${colors.grey06};

  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus {
      background-color: ${colors.grey03};
      color: ${colors.grey06};
    }

    &:focus,
    &.focus,
    &:active,
    &.active {
      border-color: ${colors.blue05};
      box-shadow: 0px 0px 2px ${colors.blue05};
    }
  }

  &:disabled,
  &.disabled {
    background-color: ${colors.grey03};
    color: ${colors.grey04};
  }
`;

const PrimaryButton = css`
  background-color: ${colors.blue08};
  color: ${colors.white};

  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus {
      background-color: ${colors.blue09};
      color: ${colors.white};
    }

    &:focus,
    &.focus,
    &:active,
    &.active {
      box-shadow: 0px 0px 2px ${colors.blue05};
    }
  }

  &:disabled,
  &.disabled {
    background-color: ${colors.grey03};
    color: ${colors.grey04};
  }
`;

const OutlineButton = css`
  background-color: ${colors.white};
  color: ${colors.grey06};
  border-color: ${colors.indigo02};

  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus {
      background-color: ${colors.blue01};
      color: ${colors.grey06};
      border-color: ${colors.indigo02};
    }

    &:focus,
    &.focus,
    &:active,
    &.active {
      box-shadow: 0px 0px 2px ${colors.blue05};
    }
  }

  &:disabled,
  &.disabled {
    background-color: ${colors.grey02};
    color: ${colors.grey04};
    border-color: ${colors.grey03};
  }
`;

const LinkButton = css`
  color: ${colors.blue05};

  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus {
      color: ${colors.blue05};
      text-decoration: underline;
    }

    &:focus,
    &.focus,
    &:active,
    &.active {
      box-shadow: 0px 0px 2px ${colors.blue05};
    }
  }

  &:disabled,
  &.disabled {
    color: ${colors.grey04};
  }
`;

const Root = styled('button')<ButtonProps>`
  ${ButtonBase}

  ${props => props.variant === 'default' && DefaultButton}
  ${props => props.variant === 'primary' && PrimaryButton}
  ${props => props.variant === 'outline' && OutlineButton}
  ${props => props.variant === 'destructive' && DefaultButton}
  ${props => props.variant === 'link' && LinkButton}
  ${props => props.variant === 'ghost' && DefaultButton}

  ${props => props.size === 'sm' && SizeSmall}
  ${props => props.size === 'md' && SizeMedium}
  ${props => props.size === 'lg' && SizeLarge}
`;

/**
 * Buttons express what action will occur when the user clicks or touches it.
 * Buttons are used to initialize an action, either in the background or
 * foreground of an experience.
 */
export const Button: React.SFC<ButtonProps> = ({ children, className, style, ...rest }) => (
  <Root className={className} style={style} {...rest}>
    {children}
  </Root>
);

Button.defaultProps = {
  className: undefined,
  style: undefined,
  block: false,
  variant: 'default',
  size: 'md'
};

Button.displayName = 'Button';
