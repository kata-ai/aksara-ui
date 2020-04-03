import * as React from 'react';

import { RadioBase } from '../../styles';

export interface InputRadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** True if the input has errors. */
  errors?: boolean;
}

const InputRadio = React.forwardRef<HTMLInputElement, InputRadioProps>(({ className, errors, ...rest }, ref) => {
  return <RadioBase className={className} inputVariant={errors ? 'errors' : 'base'} type="radio" ref={ref} {...rest} />;
});

InputRadio.defaultProps = {
  errors: false,
  size: 40,
};

InputRadio.displayName = 'InputText';

export default InputRadio;
