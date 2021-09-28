import * as React from 'react';

import { Text, TextProps } from '../../../../typography';

export interface FormLabelProps extends TextProps, React.LabelHTMLAttributes<HTMLLabelElement> {}

const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>(({ className, style, children, ...rest }, ref) => {
  return (
    <Text
      as="label"
      display="inline-block"
      fontWeight={500}
      fontSize="12px"
      lineHeight="18px"
      letterSpacing="-0.05px"
      color="greymed04"
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
