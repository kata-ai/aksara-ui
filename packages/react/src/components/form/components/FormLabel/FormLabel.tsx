import * as React from 'react';

import { Text, TextProps } from '../../../../typography';

export interface FormLabelProps extends TextProps, React.LabelHTMLAttributes<HTMLLabelElement> {}

const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>(({ className, style, children, ...rest }, ref) => {
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
      ref={ref}
      {...rest}
    >
      {children}
    </Text>
  );
});

FormLabel.displayName = 'FormLabel';

export default FormLabel;
