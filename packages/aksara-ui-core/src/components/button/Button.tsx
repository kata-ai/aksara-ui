import * as React from 'react';
import styled from 'styled-components';

import { colors } from '../../utils';
import { Circle } from '../loading';
import { ButtonStyles } from './styles';
import { ButtonBaseProps, ButtonSizes } from './types';

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

interface LoaderCircleProps {
  buttonSize?: ButtonSizes;
}

const loadingIconPadding = (size?: ButtonSizes) => {
  switch (size) {
    case 'lg':
      return 20;
    case 'md':
      return 16;
    case 'sm':
      return 12;
    default:
      return 16;
  }
};

const iconPadding = (size?: ButtonSizes) => {
  switch (size) {
    case 'lg':
      return 16;
    case 'md':
      return 16;
    case 'sm':
      return 12;
    default:
      return 16;
  }
};

const loadingIconSizes = (size?: ButtonSizes) => {
  switch (size) {
    case 'lg':
      return 40;
    case 'md':
      return 32;
    case 'sm':
      return 24;
    default:
      return 32;
  }
};

const LoaderCircle = styled(Circle)<LoaderCircleProps>`
  position: absolute;
  left: ${props => `calc(50% - ${loadingIconPadding(props.buttonSize)}px)`};
  top: ${props => `calc(50% - ${loadingIconPadding(props.buttonSize)}px)`};
`;

const Icon = styled('span')<Pick<ButtonProps, 'size' | 'iconPosition' | 'variant'>>`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  ${props =>
    props.iconPosition === 'right' ? `right: ${iconPadding(props.size)}px;` : `left: ${iconPadding(props.size)}px;`}

  & i {
    display: flex;
    align-items: center;
    vertical-align: middle;
  }
`;

/**
 * Buttons express what action will occur when the user clicks or touches it.
 * Buttons are used to initialize an action, either in the background or
 * foreground of an experience.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, className, style, size, icon, iconPosition, isLoading, disabled, variant, block, width, ...rest },
    ref
  ) => {
    const renderIcon = () => {
      if (typeof icon === 'string') {
        return (
          <Icon iconPosition={iconPosition} size={size} style={isLoading ? { visibility: 'hidden' } : undefined}>
            <i className={`icon-${icon}`} />
          </Icon>
        );
      }

      return icon ? (
        <Icon iconPosition={iconPosition} size={size} style={isLoading ? { visibility: 'hidden' } : undefined}>
          {React.createElement(icon, { fill: 'currentColor', size: 20 })}
        </Icon>
      ) : null;
    };

    return (
      <Root
        className={className}
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
        position="relative"
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
  size: 'md',
};

Button.displayName = 'Button';

export default Button;
