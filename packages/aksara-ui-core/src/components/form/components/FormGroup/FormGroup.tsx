import * as React from 'react';
import styled from 'styled-components';
import { theme } from '../../../../theme';

export interface FormGroupProps {
  /** Additional CSS classes to give to the component. */
  className?: string;
}

const Div = styled('div')`
  margin-bottom: ${theme.space.md}px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const FormGroup: React.FC<FormGroupProps> = ({ className, children }) => <Div className={className}>{children}</Div>;

FormGroup.displayName = 'FormGroup';

export default FormGroup;
