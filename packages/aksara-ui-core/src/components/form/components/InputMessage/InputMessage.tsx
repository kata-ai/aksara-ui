import * as React from 'react';
import { IconCloseRounded, IconTickRounded, IconInfo, IconWarningTriangle } from '@aksara-ui/icons';

import { Text, Box, BoxProps } from '../../../../layout';
import { theme } from '../../../../theme';
import { messageIconVariants } from '../../../message/variants';

export type InputMessageVariants = keyof typeof messageIconVariants;

export interface InputMessageProps extends BoxProps {
  /** Additional CSS classes to give to the component. */
  className?: string;
  /** Additional CSS styles to give to the component. */
  style?: React.CSSProperties;
  variant?: InputMessageVariants;
}

function messageIcon(variant: InputMessageVariants = 'general') {
  const spaceProps = { marginRight: theme.space.xs };
  const fillColor = messageIconVariants[variant].fill;

  switch (variant) {
    case 'general': {
      return null;
    }
    case 'success': {
      return <IconTickRounded size={16} fill={fillColor} style={spaceProps} />;
    }
    case 'info': {
      return <IconInfo size={16} fill={fillColor} style={spaceProps} />;
    }
    case 'warning': {
      return <IconWarningTriangle size={16} fill={fillColor} style={spaceProps} />;
    }
    case 'error': {
      return <IconCloseRounded size={16} fill={fillColor} style={spaceProps} />;
    }
    default: {
      return null;
    }
  }
}

const InputMessage: React.SFC<InputMessageProps> = ({ className, style, children, variant = 'general', ...rest }) => (
  <Box className={className} style={style} display="flex" flexDirection="row" alignItems="center" mt="xs" {...rest}>
    {messageIcon(variant)}
    <Box display="flex" flex="1 1 auto" alignItems="center">
      <Text display="block" scale={200} color={messageIconVariants[variant].fill}>
        {children}
      </Text>
    </Box>
  </Box>
);

InputMessage.displayName = 'InputMessage';

export default InputMessage;
