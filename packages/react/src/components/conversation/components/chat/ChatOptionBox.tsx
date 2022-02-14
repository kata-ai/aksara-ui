import * as React from 'react';
import { Box } from '../../../../layout';

const ChatOption: React.FC<{ show: boolean }> = ({ children, show }) => {
  if (!show) {
    return null;
  }
  return <Box>{children}</Box>;
};

export default ChatOption;
