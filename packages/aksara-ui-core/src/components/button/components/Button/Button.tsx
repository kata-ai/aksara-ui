import * as React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';

import { ButtonStyles } from './styles';
import { ButtonBaseProps, ButtonSizes } from './types';
import { renderButtonChildren, renderButtonIcon } from './utils';

export interface ButtonProps extends ButtonBaseProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Additional CSS classes to give to the component */
  className?: string;
  /** Additional CSS styles to give to the component */
  style?: React.CSSProperties;
  /** The size of the button. */
  size?: ButtonSizes;
  /** True if the button is disabled due to loading */
  isLoading?: boolean;
}

const Root = styled('button')<ButtonProps>`
  ${ButtonStyles}
`;

/**
 * Buttons express what action will occur when the user clicks or touches it.
 * Buttons are used to initialize an action, either in the background or
 * foreground of an experience.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      style,
      size,
      icon,
      iconPosition,
      isLoading,
      disabled,
      variant,
      block,
      width,
      selected,
      position = 'relative',
      type = 'button',
      ...rest
    },
    ref
  ) => {
    return (
      <Root
        className={clsx(selected && 'selected', className)}
        style={style}
        buttonSize={size}
        icon={icon}
        iconPosition={iconPosition}
        disabled={disabled || isLoading}
        isLoading={isLoading}
        variant={variant}
        ref={ref}
        display={block ? 'block' : 'inline-block'}
        width={block ? '100%' : width}
        position={position}
        type={type}
        {...rest}
      >
        {renderButtonIcon({ icon, iconPosition, size, isLoading })}
        {renderButtonChildren({ isLoading, size, variant, children })}
      </Root>
    );
  }
);

Button.defaultProps = {
  className: undefined,
  style: undefined,
  block: false,
  icon: undefined,
  iconPosition: 'left',
  variant: 'default',
  size: 40,
};

Button.displayName = 'Button';

export default Button;
