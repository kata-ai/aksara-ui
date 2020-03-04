import * as React from 'react';

import { Text, TextProps, Box } from '../../../../foundations';

export interface InputMessageProps extends TextProps {
  /** Additional CSS classes to give to the component. */
  className?: string;
  /** Additional CSS styles to give to the component. */
  style?: React.CSSProperties;
}

const InputMessage: React.SFC<InputMessageProps> = ({ className, style, children, ...rest }) => (
  <Box mt="xs">
    <Text className={className} style={style} display="block" scale={300} color="red" {...rest}>
      {children}
    </Text>
  </Box>
);

InputMessage.displayName = 'InputMessage';

export default InputMessage;
