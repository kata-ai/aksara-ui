import * as React from 'react';
import { useComponentStyles } from '../../../../system';
import { UnstyledAnchor } from '../../../../typography';
import { renderButtonChildren, renderButtonIcon } from '../Button/utils';
import { PlainButtonBaseProps, PlainButtonSizes } from './types';

export interface PlainButtonAnchorProps extends PlainButtonBaseProps, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Additional CSS classes to give to the component */
  className?: string;
  /** Additional CSS styles to give to the component */
  style?: React.CSSProperties;
  /** The size of the button. */
  size?: PlainButtonSizes;
  /** True if the button is disabled due to loading */
  isLoading?: boolean;
}

const PlainButtonAnchor = React.forwardRef<HTMLAnchorElement, PlainButtonAnchorProps>(
  ({ children, size = 'sm', icon, iconPosition, isLoading, variant = 'primary', ...rest }, ref) => {
    const plainButtonStyles = useComponentStyles('plainButton', { size, variant });

    return (
      <UnstyledAnchor
        ref={ref}
        display="inline-flex"
        flexDirection={iconPosition === 'left' ? 'row' : 'row-reverse'}
        alignItems="center"
        justifyContent="center"
        sx={plainButtonStyles}
        {...rest}
      >
        {renderButtonIcon({ icon, iconPosition, size, isLoading })}
        {renderButtonChildren({ isLoading, variant, children })}
      </UnstyledAnchor>
    );
  }
);

PlainButtonAnchor.displayName = 'PlainButtonAnchor';

export default PlainButtonAnchor;
