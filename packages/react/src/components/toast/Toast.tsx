import * as React from 'react';
import { Box, Text } from '../../layout';
import { useComponentStyles } from '../../system';
import { ToastSettings, ToastVariants } from './types';

export interface ToastProps extends Pick<ToastSettings, 'id' | 'message'> {
  variant?: ToastVariants;
}

const Toast: React.FC<ToastProps> = ({ id, message, variant = 'default' }) => {
  const toastBaseStyles = useComponentStyles('toastBase', { variant });
  return (
    <Box id={id} sx={toastBaseStyles}>
      <Box display="flex" alignItems="flex-start">
        <Text scale={200}>
          {id} &mdash; {message}
        </Text>
      </Box>
    </Box>
  );
};

export default Toast;
