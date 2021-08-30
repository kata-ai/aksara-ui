import * as React from 'react';
import { Portal } from '../../../helpers';
import { Stack } from '../../../layout';
import Toast from '../Toast';
import { ToastSettings } from '../types';
import useToast from '../useToast';

interface ToastContainerProps {
  toasts?: ToastSettings[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ toasts }) => {
  const { removeToast } = useToast();

  return (
    <Portal>
      <Stack spacing="md" display="block" position="fixed" bottom={24} right={24}>
        {toasts?.map(({ id, message }) => {
          return <Toast key={id} id={id} message={message} onRemove={() => removeToast(id)} />;
        })}
      </Stack>
    </Portal>
  );
};

export default ToastContainer;
