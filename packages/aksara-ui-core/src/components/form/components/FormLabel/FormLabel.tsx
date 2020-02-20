import * as React from 'react';

import { Text, TextProps } from '../../../../foundations';

export interface FormLabelProps extends TextProps, React.LabelHTMLAttributes<HTMLLabelElement> {}

const FormLabel: React.FC<FormLabelProps> = ({ className, style, children, ...rest }) => {
  return (
    <Text
      as="label"
      display="inline-block"
      mb="xs"
      fontWeight={600}
      scale={200}
      color="grey07"
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </Text>
  );
};

FormLabel.displayName = 'FormLabel';

export default FormLabel;
