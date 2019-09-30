import * as React from 'react';
import styled from 'styled-components';
import { ButtonBaseProps, ButtonStyles } from './styles';

export interface ButtonProps
  extends ButtonBaseProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Additional CSS classes to give to the component */
  className?: string;
  /** Additional CSS styles to give to the component */
  style?: React.CSSProperties;
}

const Root = styled('button')<ButtonProps>`
  ${ButtonStyles}
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
