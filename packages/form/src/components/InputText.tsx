import * as React from 'react';
import styled, { css } from 'styled-components';
import ThemedComponent from '@kata-kit/theme';

import themes from '../theme';
import { InputTextBase } from '../styles';

export interface InputTextProps
  extends React.AllHTMLAttributes<HTMLInputElement> {
  /** Alternate form state for input with errors. */
  errors?: boolean;
  addon?: boolean;
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

const WithAddonStyles = css`
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  margin-bottom: 0;

  /* TODO: prepend/append */
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

const Input = styled<InputTextProps, 'input'>('input')`
  ${props => InputTextBase(props)};
  height: 40px;

  ${props => props.addon && WithAddonStyles};
`;
