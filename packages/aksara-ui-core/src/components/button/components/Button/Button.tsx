import * as React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';

import { colors } from '../../../../utils';
import { IconWrapper, LoaderCircle } from './components';
import { ButtonStyles } from './styles';
import { ButtonBaseProps, ButtonSizes } from './types';
import { loadingIconSizes } from './utils';

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

const InvisibleText = styled('span')`
  visibility: hidden;
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
    const renderIcon = () => {
      if (typeof icon === 'string') {
        return (
          <IconWrapper
            iconPosition={iconPosition}
            buttonSize={size}
            style={isLoading ? { visibility: 'hidden' } : undefined}
          >
            <i className={`icon-${icon}`} />
          </IconWrapper>
        );
      }

      return icon ? (
        <IconWrapper
          iconPosition={iconPosition}
          buttonSize={size}
          style={isLoading ? { visibility: 'hidden' } : undefined}
        >
          {React.createElement(icon, { fill: 'currentColor', size: 20 })}
        </IconWrapper>
      ) : null;
    };

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
        {icon && renderIcon()}
        {isLoading ? (
          <>
            <LoaderCircle
              size={loadingIconSizes(size)}
              buttonSize={size}
              spinnerColor={variant === 'outline' ? colors.grey04 : colors.white}
            />
            <InvisibleText>{children}</InvisibleText>
          </>
        ) : (
          children
        )}
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
