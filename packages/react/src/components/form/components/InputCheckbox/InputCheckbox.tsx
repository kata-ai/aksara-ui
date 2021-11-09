import * as React from 'react';

import { CheckboxBase } from '../../styles';

export interface InputCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** True if the input has errors. */
  errors?: boolean;
}

const InputCheckbox = React.forwardRef<HTMLInputElement, InputCheckboxProps>(({ className, errors, ...rest }, ref) => {
  return (
    <CheckboxBase className={className} inputVariant={errors ? 'errors' : 'base'} type="checkbox" ref={ref} {...rest} />
  );
});

InputCheckbox.defaultProps = {
  errors: false,
  size: 40,
};

InputCheckbox.displayName = 'InputText';

export default InputCheckbox;
