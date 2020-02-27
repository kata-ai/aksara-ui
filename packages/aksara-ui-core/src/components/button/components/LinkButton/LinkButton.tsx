import * as React from 'react';
import styled from 'styled-components';

import { Circle } from '../../../loading';
import { LinkButtonBase, LinkButtonBaseProps, LinkButtonSizes, InvisibleText, LinkButtonIcon } from './styles';

export interface LinkButtonProps extends LinkButtonBaseProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  style?: React.CSSProperties;
  size?: LinkButtonSizes;
}

const loadingIconPadding = (size?: LinkButtonSizes) => {
  switch (size) {
    case 'md':
      return 16;
    case 'sm':
      return 12;
    default:
      return 16;
  }
};

const loadingIconSizes = (size?: LinkButtonSizes) => {
  switch (size) {
    case 'md':
      return 32;
    case 'sm':
      return 24;
    default:
      return 32;
  }
};

interface LoaderCircleProps {
  buttonSize?: LinkButtonSizes;
}

const LoaderCircle = styled(Circle)<LoaderCircleProps>`
  position: absolute;
  left: ${props => `calc(50% - ${loadingIconPadding(props.buttonSize)}px)`};
  top: ${props => `calc(50% - ${loadingIconPadding(props.buttonSize)}px)`};
`;

const LinkButton = React.forwardRef<HTMLButtonElement, LinkButtonProps>(
  ({ children, size, icon, iconPosition, disabled, isLoading, variant, ...rest }, ref) => {
    const renderIcon = () => {
      if (typeof icon === 'string') {
        return (
          <LinkButtonIcon
            iconPosition={iconPosition}
            buttonSize={size}
            style={isLoading ? { visibility: 'hidden' } : undefined}
          >
            <i className={`icon-${icon}`} />
          </LinkButtonIcon>
        );
      }

      return icon ? (
        <LinkButtonIcon
          iconPosition={iconPosition}
          buttonSize={size}
          style={isLoading ? { visibility: 'hidden' } : undefined}
        >
          {React.createElement(icon, { fill: 'currentColor', size: 20 })}
        </LinkButtonIcon>
      ) : null;
    };

    return (
      <LinkButtonBase
        buttonSize={size}
        disabled={disabled || isLoading}
        isLoading={isLoading}
        icon={icon}
        iconPosition={iconPosition}
        variant={variant}
        ref={ref}
        display="inline-block"
        position="relative"
        {...rest}
      >
        {icon && renderIcon()}
        {isLoading ? (
          <>
            <LoaderCircle size={loadingIconSizes(size)} buttonSize={size} spinnerColor="currentColor" />
            <InvisibleText>{children}</InvisibleText>
          </>
        ) : (
          children
        )}
      </LinkButtonBase>
    );
  }
);

LinkButton.defaultProps = {
  variant: 'primary',
  size: 'md',
  iconPosition: 'left',
};

LinkButton.displayName = 'LinkButton';

export default LinkButton;
