import * as React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';

import { ButtonStyles } from './styles';
import { ButtonBaseProps, ButtonSizes } from './types';
import { renderButtonIcon, renderButtonChildren } from './utils';

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

const Root = styled('a')<ButtonAnchorProps>`
  ${ButtonStyles}
`;

/**
 * Buttons express what action will occur when the user clicks or touches it.
 * Buttons are used to initialize an action, either in the background or
 * foreground of an experience.
 */
const ButtonAnchor = React.forwardRef<HTMLAnchorElement, ButtonAnchorProps>(
  (
    { children, className, style, size, icon, iconPosition, isLoading, variant, block, width, selected, ...rest },
    ref
  ) => {
    return (
      <Root
        className={clsx(selected && 'selected', className)}
        style={style}
        buttonSize={size}
        icon={icon}
        iconPosition={iconPosition}
        isLoading={isLoading}
        variant={variant}
        ref={ref}
        display={block ? 'block' : 'inline-block'}
        width={block ? '100%' : width}
        position="relative"
        {...rest}
      >
        {renderButtonIcon({ icon, iconPosition, size, isLoading })}
        {renderButtonChildren({ isLoading, size, variant, children })}
      </Root>
    );
  }
);

ButtonAnchor.defaultProps = {
  className: undefined,
  style: undefined,
  block: false,
  icon: undefined,
  iconPosition: 'left',
  variant: 'default',
  size: 40,
};

ButtonAnchor.displayName = 'ButtonAnchor';

export default ButtonAnchor;
