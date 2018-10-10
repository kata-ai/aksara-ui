import * as React from 'react';
import styled from 'styled-components';
import ThemedComponent from '@kata-kit/theme';

import themes from '../theme';
import { InputTextBase } from '../styles';

export interface InputTextProps
  extends React.AllHTMLAttributes<HTMLTextAreaElement> {
  /** Alternate form state for input with errors. */
  errors?: boolean;
}

const InputTextarea: React.SFC<InputTextProps> = ({
  className,
  errors,
  ...rest
}) => (
  <ThemedComponent
    color={errors ? 'withError' : 'defaultTheme'}
    themes={themes.input}
  >
    {themeAttributes => (
      <TextArea className={className} theme={themeAttributes} {...rest} />
    )}
  </ThemedComponent>
);

export default InputTextarea;

const TextArea = styled('textarea')`
  ${props => InputTextBase(props)};
`;
