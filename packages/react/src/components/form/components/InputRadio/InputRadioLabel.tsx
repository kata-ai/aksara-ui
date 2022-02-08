import * as React from 'react';
import { Box, BoxProps } from '../../../../layout';

export interface InputCheckboxLabelProps extends BoxProps, React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
  style?: React.CSSProperties;
}

const InputRadioLabel: React.FC<InputCheckboxLabelProps> = ({ className, style, children, ...rest }) => {
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

InputRadioLabel.displayName = 'InputRadioLabel';

export default InputRadioLabel;
