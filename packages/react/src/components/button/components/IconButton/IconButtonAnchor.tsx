import * as React from 'react';
import clsx from 'clsx';

import { UnstyledAnchor } from '../../../../typography';
import { useComponentStyles } from '../../../../system';
import { IconButtonBaseProps, IconButtonSizes } from './types';

export interface IconButtonAnchorProps extends IconButtonBaseProps, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Additional CSS classes to give to the component */
  className?: string;
  /** Additional CSS styles to give to the component */
  style?: React.CSSProperties;
  /** The size of the button. */
  size?: IconButtonSizes;
  /** True if the button is disabled due to loading */
  isLoading?: boolean;
}

const IconButtonAnchor = React.forwardRef<HTMLAnchorElement, IconButtonAnchorProps>(
  ({ children, className, style, isLoading, size = 'md', variant = 'primary', width, selected, ...rest }, ref) => {
    const iconButtonStyles = useComponentStyles('iconButton', { size, variant });

    return (
      <UnstyledAnchor
        className={clsx(selected && 'selected', className)}
        style={style}
        ref={ref}
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        sx={iconButtonStyles}
        {...rest}
      >
        {children}
      </UnstyledAnchor>
    );
  }
);

IconButtonAnchor.displayName = 'IconButtonAnchor';

export default IconButtonAnchor;
