import * as React from 'react';
import styled, { css } from 'styled-components';

import { InputBaseProps, InputBase } from '../../styles';

export interface InputTextareaProps extends InputBaseProps, React.TextareaHTMLAttributes<HTMLTextAreaElement> {
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

const Input = styled('textarea')<InputTextareaProps>`
  ${InputBase};

  ${props => props.addon && WithAddonStyles};
`;

const InputTextarea: React.FC<InputTextareaProps> = ({ className, errors, addon, ...rest }) => {
  return <Input className={className} errors={errors} addon={addon} {...rest} />;
};

InputTextarea.defaultProps = {
  errors: false,
  addon: false,
};

InputTextarea.displayName = 'InputTextarea';

export default InputTextarea;
