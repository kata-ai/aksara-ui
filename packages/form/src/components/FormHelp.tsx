import * as React from 'react';
import styled from 'styled-components';

import { FormHelpBase } from '../styles';

export interface FormLabelProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

const FormLabel: React.SFC<FormLabelProps> = ({
  className,
  children,
  ...rest
}) => (
  <Help className={className} {...rest}>
    {children}
  </Help>
);

export default FormLabel;

const Help = styled('p')`
  ${FormHelpBase};
`;
