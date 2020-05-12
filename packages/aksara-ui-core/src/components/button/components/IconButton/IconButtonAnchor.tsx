import * as React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';

import { IconButtonStyles, IconButtonBaseProps, IconButtonSizes } from './styles';

export interface IconButtonAnchorProps extends IconButtonBaseProps, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Additional CSS classes to give to the component */
  className?: string;
  /** Additional CSS styles to give to the component */
  style?: React.CSSProperties;
  /** The size of the button. */
  size?: IconButtonSizes;
}

const Root = styled('a')<IconButtonAnchorProps>`
  ${IconButtonStyles}
`;

const IconButtonAnchor = React.forwardRef<HTMLAnchorElement, IconButtonAnchorProps>(
  ({ children, className, style, size, selected, ...rest }, ref) => (
    <Root className={clsx(selected && 'selected', className)} style={style} buttonSize={size} ref={ref} {...rest}>
      {children}
    </Root>
  )
);

IconButtonAnchor.defaultProps = {
  className: undefined,
  style: undefined,
  variant: 'default',
};

IconButtonAnchor.displayName = 'IconButtonAnchor';

export default IconButtonAnchor;
