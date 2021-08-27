import * as React from 'react';
import { Portal } from '../../helpers';
import { Box } from '../../layout';
import Toast from './Toast';

const ToastContainer = () => {
  return (
    <Portal>
      <Box display="block" position="fixed" bottom={24} right={24}>
        <Toast message="Single line toast message" />
      </Box>
    </Portal>
  );
};

export default ToastContainer;
