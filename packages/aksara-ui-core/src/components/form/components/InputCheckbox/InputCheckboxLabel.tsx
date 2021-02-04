import * as React from 'react';
import { Box, BoxProps } from '../../../../foundations';
import { WithStylesProps } from '../../types';

export type InputCheckboxLabelProps = BoxProps & React.LabelHTMLAttributes<HTMLLabelElement> & WithStylesProps;

const InputCheckboxLabel: React.FC<InputCheckboxLabelProps> = ({ className, style, children, ...rest }) => {
  return (
    <Box
      as="label"
      display="inline-flex"
      flexDirection="row"
      alignItems="center"
      cursor="pointer"
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </Box>
  );
};

InputCheckboxLabel.displayName = 'InputCheckboxLabel';

export default InputCheckboxLabel;
