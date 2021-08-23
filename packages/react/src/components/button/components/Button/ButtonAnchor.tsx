import * as React from 'react';
import clsx from 'clsx';

import { Box, Text, UnstyledAnchor } from '../../../../layout';
import { theme } from '../../../../theme';
import { useComponentStyles } from '../../../../system';
import { Spinner } from '../../../loading';
import { ButtonBaseProps, ButtonSizes } from './types';

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
      variant = 'primary',
      block,
      width,
      selected,
      ...rest
    },
    ref
  ) => {
    const buttonBaseStyles = useComponentStyles('buttonBase', { size, variant });

    const renderIcon = () => {
      if (icon) {
        return (
          <Box
            mr={iconPosition === 'left' ? 'xs' : null}
            ml={iconPosition === 'right' ? 'xs' : null}
            style={isLoading ? { visibility: 'hidden' } : undefined}
          >
            {React.createElement(icon, { fill: 'currentColor', size: 16 })}
          </Box>
        );
      }

      return null;
    };

    const renderButtonChildren = () => {
      if (isLoading) {
        return (
          <>
            <Box>
              <Spinner
                size={16}
                spinnerColor={variant === 'secondary' ? theme.colors.greydark02 : theme.colors.greylight01}
              />
            </Box>
            <Text visibility="hidden">{children}</Text>
          </>
        );
      }

      return <Text>{children}</Text>;
    };

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
        {renderIcon()}
        {renderButtonChildren()}
      </UnstyledAnchor>
    );
  }
);

ButtonAnchor.displayName = 'ButtonAnchor';

export default ButtonAnchor;
