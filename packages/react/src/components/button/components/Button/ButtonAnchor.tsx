import * as React from 'react';
import clsx from 'clsx';

import { UnstyledAnchor } from '../../../../layout';
import { useComponentStyles } from '../../../../system';
import { ButtonBaseProps, ButtonSizes } from './types';
import { renderButtonChildren, renderButtonIcon } from './utils';

export interface ButtonAnchorProps extends ButtonBaseProps, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Additional CSS classes to give to the component */
  className?: string;
  /** Additional CSS styles to give to the component */
  style?: React.CSSProperties;
  /** The size of the button. */
  size?: ButtonSizes;
  /** True if the button is disabled due to loading */
  isLoading?: boolean;
}

/**
 * Buttons express what action will occur when the user clicks or touches it.
 * Buttons are used to initialize an action, either in the background or
 * foreground of an experience.
 */
const ButtonAnchor = React.forwardRef<HTMLAnchorElement, ButtonAnchorProps>(
  (
    {
      children,
      className,
      style,
      size = 'md',
      icon,
      iconPosition = 'left',
      isLoading,
      variant = 'secondary',
      block,
      width,
      selected,
      ...rest
    },
    ref
  ) => {
    const buttonBaseStyles = useComponentStyles('buttonBase', { size, variant });

    return (
      <UnstyledAnchor
        className={clsx(selected && 'selected', className)}
        style={style}
        ref={ref}
        display={block ? 'flex' : 'inline-flex'}
        width={block ? '100%' : width}
        flexDirection={iconPosition === 'left' ? 'row' : 'row-reverse'}
        alignItems="center"
        justifyContent="center"
        sx={buttonBaseStyles}
        {...rest}
      >
        {renderButtonIcon({ icon, iconPosition, isLoading })}
        {renderButtonChildren({ isLoading, variant, children })}
      </UnstyledAnchor>
    );
  }
);

ButtonAnchor.displayName = 'ButtonAnchor';

export default ButtonAnchor;
