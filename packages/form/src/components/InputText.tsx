import * as React from 'react';
import styled from 'styled-components';
import ThemedComponent from '@kata-kit/theme';

import themes from '../theme';
import { InputTextBase } from '../styles';

export interface InputTextProps
  extends React.AllHTMLAttributes<HTMLInputElement> {
  /** Alternate form state for input with errors. */
  errors?: boolean;
}

const InputText: React.SFC<InputTextProps> = ({
  className,
  errors,
  ...rest
}) => (
  <ThemedComponent
    color={errors ? 'withError' : 'defaultTheme'}
    themes={themes.input}
  >
    {themeAttributes => (
      <Input className={className} theme={themeAttributes} {...rest} />
    )}
  </ThemedComponent>
);

export default InputText;

const Input = styled('input')`
  ${props => InputTextBase(props)};
  height: 40px;
`;
