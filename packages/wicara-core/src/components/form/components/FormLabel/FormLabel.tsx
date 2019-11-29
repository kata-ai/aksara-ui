import * as React from 'react';
import styled from 'styled-components';

import { InputBaseProps, LabelBase } from '../../styles';

export interface FormLabelProps
  extends InputBaseProps,
    React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label = styled('label')`
  ${LabelBase};
`;

const FormLabel: React.FC<FormLabelProps> = ({ className, children, errors, ...rest }) => {
  return (
    <Label className={className} errors={errors} {...rest}>
      {children}
    </Label>
  );
};

FormLabel.defaultProps = {
  errors: false
};

FormLabel.displayName = 'FormLabel';

export default FormLabel;
