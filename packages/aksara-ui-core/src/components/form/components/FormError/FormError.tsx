import * as React from 'react';

import { Text, TextProps } from '../../../../foundations';

export interface FormErrorProps extends TextProps {
  /** Additional CSS classes to give to the component. */
  className?: string;
  /** Additional CSS styles to give to the component. */
  style?: React.CSSProperties;
}

const FormError: React.SFC<FormErrorProps> = ({ className, style, children, ...rest }) => (
  <Text className={className} style={style} display="block" scale={300} color="red" mt="xxs" {...rest}>
    {children}
  </Text>
);

FormError.displayName = 'FormError';

export default FormError;
