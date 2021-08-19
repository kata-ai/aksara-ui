import * as React from 'react';
import { IconCloseRounded, IconTickRounded, IconInfo, IconWarningTriangle } from '@aksara-ui/icons';

import { Text, Box, BoxProps } from '../../../../layout';
import { theme } from '../../../../theme';
import { useComponentStyles } from '../../../../system';

export type InputMessageVariants = 'default' | 'success' | 'warning' | 'info' | 'critical';

export interface InputMessageProps extends BoxProps {
  /** Additional CSS classes to give to the component. */
  className?: string;
  /** Additional CSS styles to give to the component. */
  style?: React.CSSProperties;
  variant?: InputMessageVariants;
}

function messageIcon(variant: InputMessageVariants = 'default') {
  const spaceProps = { marginRight: theme.space.xs };

  switch (variant) {
    case 'default': {
      return null;
    }
    case 'success': {
      return <IconTickRounded size={16} fill="currentColor" style={spaceProps} />;
    }
    case 'info': {
      return <IconInfo size={16} fill="currentColor" style={spaceProps} />;
    }
    case 'warning': {
      return <IconWarningTriangle size={16} fill="currentColor" style={spaceProps} />;
    }
    case 'critical': {
      return <IconCloseRounded size={16} fill="currentColor" style={spaceProps} />;
    }
    default: {
      return null;
    }
  }
}

const InputMessage = React.forwardRef<HTMLDivElement, InputMessageProps>(
  ({ className, style, children, variant = 'default', ...rest }, ref) => {
    const inputMessageStyles = useComponentStyles('inputMessage', { variant });

    return (
      <Box
        ref={ref}
        className={className}
        style={style}
        display="flex"
        flexDirection="row"
        alignItems="center"
        mt="xs"
        sx={inputMessageStyles}
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
