import * as React from 'react';
import styled, { css } from 'styled-components';
import { ButtonBaseProps, ButtonBase, SizeSmall, SizeMedium, SizeLarge } from '../styles';
import { colors } from '../../../utils';

export interface ButtonProps extends ButtonBaseProps {
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
    &:focus {
      background-color: ${colors.grey03};
      color: ${colors.grey06};
    }

    &:focus,
    &:active {
      border-color: ${colors.blue05};
      box-shadow: 0px 0px 2px ${colors.blue05};
    }
  }
`;

const Root = styled('button')<ButtonProps>`
  ${ButtonBase}

  ${props => props.variant === 'default' && DefaultButton}
  ${props => props.variant === 'primary' && DefaultButton}
  ${props => props.variant === 'outline' && DefaultButton}
  ${props => props.variant === 'destructive' && DefaultButton}
  ${props => props.variant === 'link' && DefaultButton}

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
