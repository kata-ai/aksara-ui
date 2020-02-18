import * as React from 'react';

import { Text, TextProps } from '../../../../foundations';

export interface FormHelpProps extends TextProps {
  /** Additional CSS classes to give to the component. */
  className?: string;
  /** Additional CSS styles to give to the component. */
  style?: React.CSSProperties;
}

const FormHelp: React.SFC<FormHelpProps> = ({ className, style, children, ...rest }) => (
  <Text className={className} style={style} scale={300} mt="xxs" {...rest}>
    {children}
  </Text>
);

FormHelp.displayName = 'FormHelp';

export default FormHelp;
