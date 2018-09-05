import React from 'react';
import styled from 'styled-components';

import { variables } from '@kata-kit/theme';

export interface FormGroupProps {
  className?: string;
}

const FormGroup: React.SFC<FormGroupProps> = ({ className, children }) => (
  <Div className={className}>{children}</Div>
);

export default FormGroup;

const Div = styled('div')`
  margin-bottom: ${variables.spaces.space2};
`;
