import * as React from 'react';
import styled from 'styled-components';

import { colors } from '../../utils';
import { Circle } from '../loading';
import { ButtonBaseProps, ButtonStyles, ButtonSizes } from './styles';

export interface ButtonProps
  extends ButtonBaseProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Additional CSS classes to give to the component */
  className?: string;
  /** Additional CSS styles to give to the component */
  style?: React.CSSProperties;
  /** True if the button is disabled due to loading */
  isLoading?: boolean;
}

const Root = styled('button')<ButtonProps>`
  ${ButtonStyles}
`;

export const InvisibleText = styled('span')`
  visibility: hidden;
`;

interface LoaderCircleProps {
  buttonSize?: ButtonSizes;
}

const LoaderCircle = styled(Circle)<LoaderCircleProps>`
  position: absolute;
  left: 50%;
  margin-left: ${props => (props.buttonSize === 'sm' ? '-11px' : '-15px')};
  height: 100%;
`;

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

const Icon = styled('span')<Pick<ButtonProps, 'size' | 'iconPosition'>>`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  ${props =>
    props.iconPosition === 'right'
      ? `right: ${iconPadding(props.size)}px;`
      : `left: ${iconPadding(props.size)}px;`}

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
const Button: React.SFC<ButtonProps> = ({
  children,
  className,
  style,
  size,
  icon,
  iconPosition,
  isLoading,
  disabled,
  ...rest
}) => {
  const renderIcon = () => {
    if (typeof icon === 'string') {
      return (
        <Icon
          iconPosition={iconPosition}
          size={size}
          style={isLoading ? { visibility: 'hidden' } : undefined}
        >
          <i className={`icon-${icon}`} />
        </Icon>
      );
    }

    return (
      <Icon
        iconPosition={iconPosition}
        size={size}
        style={isLoading ? { visibility: 'hidden' } : undefined}
      >
        {icon}
      </Icon>
    );
  };

  return (
    <Root
      className={className}
      style={style}
      size={size}
      icon={icon}
      iconPosition={iconPosition}
      disabled={disabled || isLoading}
      isLoading={isLoading}
      {...rest}
    >
      {icon && renderIcon()}
      {isLoading ? (
        <>
          <LoaderCircle
            size={size === 'sm' ? 24 : 32}
            buttonSize={size}
            spinnerColor={colors.white}
          />
          <InvisibleText>{children}</InvisibleText>
        </>
      ) : (
        children
      )}
    </Root>
  );
};

Button.defaultProps = {
  className: undefined,
  style: undefined,
  block: false,
  icon: undefined,
  iconPosition: 'left',
  variant: 'default',
  size: 'md'
};

Button.displayName = 'Button';

export default Button;
