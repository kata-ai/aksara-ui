import * as React from 'react';

import { InputBaseProps, TextAreaBase } from '../../styles';

export interface InputTextareaProps extends InputBaseProps, React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** True if this text input has an addon style */
  addon?: boolean;
  /** True if the input has errors. */
  errors?: boolean;
  /** Form size */
  inputSize?: 40 | 48;
}

const InputTextarea = React.forwardRef<HTMLTextAreaElement, InputTextareaProps>(
  ({ className, errors, addon, ...rest }, ref) => {
    return (
      <TextAreaBase className={className} inputVariant={errors ? 'errors' : 'base'} addon={addon} ref={ref} {...rest} />
    );
  }
);

InputTextarea.defaultProps = {
  errors: false,
  addon: false,
};

InputTextarea.displayName = 'InputTextarea';

export default InputTextarea;
