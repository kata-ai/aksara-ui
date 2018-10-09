import * as React from 'react';
import styled from 'styled-components';
import ThemedComponent from '@kata-kit/theme';

import { FormErrorBase } from '../styles';
import themes from '../theme';

export interface FormGroupProps {
  /** Additional CSS classes to give to the component. */
  className?: string;
}

const FormError: React.SFC<FormGroupProps> = ({ className, children }) => (
  <ThemedComponent color="withError" themes={themes.label}>
    {themeAttributes => (
      <Div className={className} theme={themeAttributes}>
        {children}
      </Div>
    )}
  </ThemedComponent>
);

export default FormError;

const Div = styled('div')`
  ${FormErrorBase};
`;
