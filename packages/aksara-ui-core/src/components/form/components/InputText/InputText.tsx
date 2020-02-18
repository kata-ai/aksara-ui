import * as React from 'react';
import styled, { css } from 'styled-components';

import { InputBaseProps, InputBase } from '../../styles';

export interface InputTextProps extends InputBaseProps, React.InputHTMLAttributes<HTMLInputElement> {
  /** True if this text input has an addon style */
  addon?: boolean;
}

const WithAddonStyles = css`
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  margin-bottom: 0;

  /* TODO: prepend/append */
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

const Input = styled('input')<InputTextProps>`
  ${InputBase};
  height: 40px;

  ${props => props.addon && WithAddonStyles};
`;

const InputText: React.FC<InputTextProps> = ({ className, errors, addon, ...rest }) => {
  return <Input className={className} errors={errors} addon={addon} {...rest} />;
};

InputText.defaultProps = {
  errors: false,
  addon: false,
};

InputText.displayName = 'InputText';

export default InputText;
