import * as React from 'react';
import styled from 'styled-components';
import { FloatingButtonBaseProps, FloatingButtonStyles } from './styles';

export interface FloatingButtonProps
  extends FloatingButtonBaseProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Additional CSS classes to give to the component */
  className?: string;
  /** Additional CSS styles to give to the component */
  style?: React.CSSProperties;
}

const Root = styled('button')<FloatingButtonProps>`
  ${FloatingButtonStyles}
`;

/**
 * Floating action buttons used for primary context actions.
 */
export const FloatingButton: React.SFC<FloatingButtonProps> = ({
  children,
  className,
  style,
  ...rest
}) => (
  <Root className={className} style={style} {...rest}>
    {children}
  </Root>
);

FloatingButton.defaultProps = {
  className: undefined,
  style: undefined,
  variant: 'default',
  size: 'md'
};

FloatingButton.displayName = 'FloatingButton';
