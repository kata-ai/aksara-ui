import * as React from 'react';
import styled from 'styled-components';

import { Circle } from '../../../loading';
import { InvisibleText } from '../Button/components';
import { LinkButtonBase, LinkButtonBaseProps, LinkButtonSizes, LinkButtonIcon } from './styles';

export interface LinkButtonProps extends LinkButtonBaseProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  style?: React.CSSProperties;
  size?: LinkButtonSizes;
}

const loadingIconPadding = (size?: LinkButtonSizes) => {
  switch (size) {
    case 40:
      return 16;
    case 32:
      return 12;
    default:
      return 16;
  }
};

const loadingIconSizes = (size?: LinkButtonSizes) => {
  switch (size) {
    case 40:
      return 32;
    case 32:
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
  size: 40,
  iconPosition: 'left',
};

LinkButton.displayName = 'LinkButton';

export default LinkButton;
