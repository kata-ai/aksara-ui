import * as React from 'react';
import VisuallyHidden from '@reach/visually-hidden';

import { Box } from '../../../../layout';
import { useComponentStyles } from '../../../../system';
import { UnstyledButton } from '../../../button';

export interface InputToggleProps
  extends Omit<React.ComponentPropsWithoutRef<'button'>, 'size' | 'onClick' | 'onChange'> {
  className?: string;
  style?: React.CSSProperties;
  label: string;
  checked?: boolean;
  onChange?: (value: boolean) => void;
}

const InputToggle = React.forwardRef<HTMLButtonElement, InputToggleProps>(
  ({ id, className, style, label, checked, onChange, disabled, ...rest }, ref) => {
    const inputToggleButtonStyles = useComponentStyles('inputToggleButton');
    const inputToggleCircleStyles = useComponentStyles('inputToggleCircle');

    const toggle = React.useCallback(() => onChange?.(!checked), [onChange, checked]);
    const handleClick = React.useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        toggle();
      },
      [toggle]
    );

    return (
      <UnstyledButton
        type="button"
        id={id}
        className={className}
        style={style}
        role="switch"
        aria-checked={checked}
        tabIndex={0}
        onClick={handleClick}
        disabled={disabled}
        sx={inputToggleButtonStyles}
        ref={ref}
        {...rest}
      >
        <Box
          as="span"
          sx={{ ...inputToggleCircleStyles, transform: checked ? 'translateX(20px)' : 'translateX(0px)' }}
          aria-hidden
        />
        <VisuallyHidden>{label}</VisuallyHidden>
      </UnstyledButton>
    );
  }
);

export default InputToggle;
