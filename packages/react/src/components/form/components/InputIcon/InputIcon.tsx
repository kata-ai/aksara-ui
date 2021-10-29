import * as React from 'react';
import { VisuallyHidden } from '../../../../helpers';
import { Box, BoxProps } from '../../../../layout';

export interface InputIconProps extends BoxProps, React.ComponentPropsWithoutRef<'div'> {
  icon: React.ComponentType<any>;
  iconPosition?: 'left' | 'right';
  iconText?: string;
  disabled?: boolean;
}

function renderIconPosition(iconPosition: 'left' | 'right' = 'left') {
  switch (iconPosition) {
    case 'left': {
      return { [iconPosition]: 0, pl: 12 };
    }
    case 'right': {
      return { [iconPosition]: 0, pr: 12 };
    }
    default: {
      return {};
    }
  }
}

const InputIcon = React.forwardRef<HTMLDivElement, InputIconProps>(
  ({ className, children, icon, iconPosition = 'left', iconText, disabled, ...rest }, ref) => {
    return (
      <Box
        ref={ref}
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="absolute"
        top={0}
        bottom={0}
        color={disabled ? 'greymed01' : 'greymed04'}
        {...renderIconPosition(iconPosition)}
        {...rest}
      >
        {iconText && <VisuallyHidden>{iconText}</VisuallyHidden>}
        {React.createElement(icon, { fill: 'currentColor', size: 16 })}
      </Box>
    );
  }
);

InputIcon.displayName = 'InputIcon';

export default InputIcon;
