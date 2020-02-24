import * as React from 'react';
import styled from 'styled-components';

import { Circle } from '../loading';
import { OutlineButtonStyles } from './styles';
import { OutlineButtonBaseProps, ButtonSizes } from './types';

export interface OutlineButtonProps extends OutlineButtonBaseProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Additional CSS classes to give to the component */
  className?: string;
  /** Additional CSS styles to give to the component */
  style?: React.CSSProperties;
  /** True if the button is disabled due to loading */
  isLoading?: boolean;
}

const Root = styled('button')<OutlineButtonProps>`
  ${OutlineButtonStyles}
`;

const InvisibleText = styled('span')`
  visibility: hidden;
`;

interface LoaderCircleProps {
  buttonSize?: ButtonSizes;
}

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

const LoaderCircle = styled(Circle)<LoaderCircleProps>`
  position: absolute;
  left: ${props => `calc(50% - ${iconPadding(props.buttonSize)}px)`};
  top: ${props => `calc(50% - ${iconPadding(props.buttonSize)}px)`};
`;

const Icon = styled('span')<Pick<OutlineButtonProps, 'size' | 'iconPosition'>>`
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
 * Outline-styled button for alternate styling.
 * @deprecated This button type has been deprecated.
 */
const OutlineButton = React.forwardRef<HTMLButtonElement, OutlineButtonProps>(
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
        size={size}
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
            <LoaderCircle size={size === 'sm' ? 24 : 32} buttonSize={size} spinnerColor="inherit" />
            <InvisibleText>{children}</InvisibleText>
          </>
        ) : (
          children
        )}
      </Root>
    );
  }
);

OutlineButton.defaultProps = {
  className: undefined,
  style: undefined,
  block: false,
  icon: undefined,
  iconPosition: 'left',
  variant: 'default',
  size: 'md',
};

OutlineButton.displayName = 'OutlineButton';

export default OutlineButton;
