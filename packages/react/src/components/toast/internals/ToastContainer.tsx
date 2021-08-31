import * as React from 'react';
import { Portal } from '../../../helpers';
import { Box, Stack } from '../../../layout';
import Toast from '../Toast';
import { ToastSettings } from '../types';
import ToastContext from './ToastContext';

interface ToastContainerProps {
  toasts?: ToastSettings[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ toasts }) => {
  const { removeToast } = React.useContext(ToastContext);

  return (
    <Portal>
      <Stack spacing="md" display="block" position="fixed" bottom={24} right={24}>
        {toasts?.map(({ id, message, onRemove: _onRemove, ...rest }) => {
          return (
            <Box textAlign="right">
              <Toast key={id} id={id} message={message} onRemove={() => removeToast(id)} {...rest} />
            </Box>
          );
        })}
      </Stack>
    </Portal>
  );
};

export default ToastContainer;
