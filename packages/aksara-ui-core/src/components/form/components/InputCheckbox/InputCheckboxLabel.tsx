import * as React from 'react';
import styled from 'styled-components';
import { Box, BoxProps } from '../../../../foundations';
import { WithStylesProps } from '../../types';

export type InputCheckboxLabelProps = BoxProps & React.LabelHTMLAttributes<HTMLLabelElement> & WithStylesProps;

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
