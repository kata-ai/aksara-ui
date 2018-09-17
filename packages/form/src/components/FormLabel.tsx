import * as React from 'react';
import styled from 'styled-components';
import ThemedComponent from '@kata-kit/theme';

import { FormLabelBase } from '../styles';
import themes from '../theme';

export interface FormLabelProps
  extends React.AllHTMLAttributes<HTMLLabelElement> {
  errors?: boolean;
}

const FormLabel: React.SFC<FormLabelProps> = ({
  className,
  errors,
  children,
  ...rest
}) => (
  <ThemedComponent
    color={errors ? 'withError' : 'defaultTheme'}
    themes={themes.label}
  >
    {themeAttributes => (
      <Label className={className} theme={themeAttributes} {...rest}>
        {children}
      </Label>
    )}
  </ThemedComponent>
);

export default FormLabel;

const Label = styled('label')`
  ${FormLabelBase};
`;
