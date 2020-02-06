import * as React from 'react';
import styled from 'styled-components';

import { IconButtonStyles } from './styles';
import { IconButtonBaseProps } from './types';

export interface IconButtonProps extends IconButtonBaseProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Additional CSS classes to give to the component */
  className?: string;
  /** Additional CSS styles to give to the component */
  style?: React.CSSProperties;
}

const Root = styled('button')<IconButtonProps>`
  ${IconButtonStyles}
`;

const IconButton: React.SFC<IconButtonProps> = ({ children, className, style, ...rest }) => (
  <Root className={className} style={style} {...rest}>
    {children}
  </Root>
);

IconButton.defaultProps = {
  className: undefined,
  style: undefined,
  variant: 'default',
};

IconButton.displayName = 'IconButton';

export default IconButton;
