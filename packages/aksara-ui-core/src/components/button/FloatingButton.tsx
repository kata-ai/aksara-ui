import * as React from 'react';
import styled from 'styled-components';

import { FloatingButtonStyles } from './styles';
import { FloatingButtonBaseProps, FloatingButtonSizes } from './types';

export interface FloatingButtonProps extends FloatingButtonBaseProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Additional CSS classes to give to the component */
  className?: string;
  /** Additional CSS styles to give to the component */
  style?: React.CSSProperties;
  /** The size of the button. */
  size?: FloatingButtonSizes;
}

const Root = styled('button')<FloatingButtonProps>`
  ${FloatingButtonStyles}
`;

/**
 * Floating action buttons used for primary context actions.
 * @deprecated This button type has been deprecated.
 */
const FloatingButton = React.forwardRef<HTMLButtonElement, FloatingButtonProps>(
  ({ children, className, style, size, ...rest }, ref) => (
    <Root className={className} style={style} ref={ref} buttonSize={size} {...rest}>
      {children}
    </Root>
  )
);

FloatingButton.defaultProps = {
  className: undefined,
  style: undefined,
  variant: 'default',
  size: 40,
};

FloatingButton.displayName = 'FloatingButton';

export default FloatingButton;
