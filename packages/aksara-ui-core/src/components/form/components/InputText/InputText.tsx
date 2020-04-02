import * as React from 'react';

import { InputBase } from '../../styles';
import { InputSizes } from '../../types';

export interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** True if this text input has an addon style */
  addon?: boolean;
  /** True if the input has errors. */
  errors?: boolean;
  /** Form size */
  inputSize?: InputSizes;
}

const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(
  ({ className, errors, addon, size, ...rest }, ref) => {
    return (
      <InputBase
        className={className}
        inputVariant={errors ? 'errors' : 'base'}
        inputSize={size as InputSizes}
        addon={addon}
        ref={ref}
        {...rest}
      />
    );
  }
);

InputText.defaultProps = {
  errors: false,
  addon: false,
  size: 40,
};

InputText.displayName = 'InputText';

export default InputText;
