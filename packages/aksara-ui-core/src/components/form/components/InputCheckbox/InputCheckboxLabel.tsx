import * as React from 'react';
import styled from 'styled-components';
import { Box, BoxProps } from '../../../../foundations';

export interface InputCheckboxLabelProps extends BoxProps, React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
  style?: React.CSSProperties;
}

const LabelBase = styled(Box)`
  cursor: pointer;
`;

const InputCheckboxLabel: React.FC<InputCheckboxLabelProps> = ({ className, style, children, ...rest }) => {
  return (
    <LabelBase
      as="label"
      display="inline-flex"
      flexDirection="row"
      alignItems="center"
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </LabelBase>
  );
};

InputCheckboxLabel.displayName = 'InputCheckboxLabel';

export default InputCheckboxLabel;
