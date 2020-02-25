import * as React from 'react';
import styled from 'styled-components';

import { IconButtonStyles } from './styles';
import { IconButtonBaseProps, IconButtonSizes } from './types';

export interface IconButtonProps extends IconButtonBaseProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Additional CSS classes to give to the component */
  className?: string;
  /** Additional CSS styles to give to the component */
  style?: React.CSSProperties;
  /** The size of the button. */
  size?: IconButtonSizes;
}

const Root = styled('button')<IconButtonProps>`
  ${IconButtonStyles}
`;

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, className, style, size, ...rest }, ref) => (
    <Root className={className} style={style} buttonSize={size} ref={ref} {...rest}>
      {children}
    </Root>
  )
);

IconButton.defaultProps = {
  className: undefined,
  style: undefined,
  variant: 'default',
};

IconButton.displayName = 'IconButton';

export default IconButton;
