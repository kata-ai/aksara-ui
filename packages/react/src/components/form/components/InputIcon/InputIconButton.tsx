import * as React from 'react';
import { VisuallyHidden } from '../../../../helpers';
import { UnstyledButton, UnstyledButtonProps } from '../../../button';

export interface InputIconButtonProps extends UnstyledButtonProps, React.ComponentPropsWithoutRef<'button'> {
  icon: React.ComponentType<any>;
  iconPosition?: 'left' | 'right';
  iconText?: string;
  disabled?: boolean;
}

function renderIconPosition(iconPosition: 'left' | 'right' = 'left') {
  switch (iconPosition) {
    case 'left': {
      return { [iconPosition]: 0, pl: 12, pr: 8 };
    }
    case 'right': {
      return { [iconPosition]: 0, pr: 12, pl: 8 };
    }
    default: {
      return {};
    }
  }
}

const InputIconButton = React.forwardRef<HTMLButtonElement, InputIconButtonProps>(
  ({ className, children, type = 'button', icon, iconPosition = 'left', iconText, disabled, ...rest }, ref) => {
    return (
      <UnstyledButton
        ref={ref}
        type={type}
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="absolute"
        top={0}
        bottom={0}
        color={disabled ? 'greymed01' : 'greymed04'}
        disabled={disabled}
        _disabled={{
          cursor: 'not-allowed',
        }}
        {...renderIconPosition(iconPosition)}
        {...rest}
      >
        {iconText && <VisuallyHidden>{iconText}</VisuallyHidden>}
        {React.createElement(icon, { fill: 'currentColor', size: 16 })}
      </UnstyledButton>
    );
  }
);

InputIconButton.displayName = 'InputIconButton';

export default InputIconButton;
