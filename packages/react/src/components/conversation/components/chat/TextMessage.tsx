import * as React from 'react';
import { Box } from '../../../../layout';
import { Text } from '../../../../typography';
import { useComponentStyles } from '../../../../system';
import { MessageVariant } from './MessageBox';
/**
 *
 * spec
 * max-width: 125 px
 */

// eslint-disable-next-line import/prefer-default-export
export const TextMessage: React.FC<{ variant: MessageVariant }> = ({ children, variant }) => {
  const conversationTextMessageStyle = useComponentStyles('conversationTextMessage', { variant });

  return (
    <Box sx={conversationTextMessageStyle}>
      <Text scale={300}>{children}</Text>
    </Box>
  );
};
