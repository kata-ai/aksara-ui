import * as React from 'react';
import { IconCloseRounded, IconTickRounded, IconInfo, IconWarningTriangle } from '@aksara-ui/icons';

import { Text, Box, BoxProps } from '../../../../layout';

export type InputMessageVariants = 'success' | 'warning' | 'info' | 'critical';

export interface InputMessageProps extends BoxProps, React.ComponentPropsWithoutRef<'div'> {
  /** Additional CSS classes to give to the component. */
  className?: string;
  /** Additional CSS styles to give to the component. */
  style?: React.CSSProperties;
  variant?: InputMessageVariants;
}

function messageIcon(variant: InputMessageVariants = 'info') {
  switch (variant) {
    case 'success': {
      return <IconTickRounded size={16} fill="currentColor" />;
    }
    case 'info': {
      return <IconInfo size={16} fill="currentColor" />;
    }
    case 'warning': {
      return <IconWarningTriangle size={16} fill="currentColor" />;
    }
    case 'critical': {
      return <IconCloseRounded size={16} fill="currentColor" />;
    }
    default: {
      return <IconInfo size={16} fill="currentColor" />;
    }
  }
}

function messageColors(variant: InputMessageVariants = 'info') {
  switch (variant) {
    case 'success': {
      return 'green08';
    }
    case 'info': {
      return 'indigo06';
    }
    case 'warning': {
      return 'yellow08';
    }
    case 'critical': {
      return 'red07';
    }
    default: {
      return 'indigo06';
    }
  }
}

const InputMessage = React.forwardRef<HTMLDivElement, InputMessageProps>(
  ({ className, style, children, variant = 'info', ...rest }, ref) => {
    return (
      <Box
        ref={ref}
        className={className}
        style={style}
        display="flex"
        flexDirection="row"
        alignItems="center"
        mt="xs"
        color={messageColors(variant)}
        {...rest}
      >
        <Box mr="xs" size={16}>
          {messageIcon(variant)}
        </Box>
        <Box display="flex" flex="1 1 auto" alignItems="center">
          <Text display="block" scale={200}>
            {children}
          </Text>
        </Box>
      </Box>
    );
  }
);

InputMessage.displayName = 'InputMessage';

export default InputMessage;
