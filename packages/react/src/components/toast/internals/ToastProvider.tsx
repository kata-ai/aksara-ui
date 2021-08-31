import * as React from 'react';
import { ToastSettings } from '../types';
import ToastContainer from './ToastContainer';
import ToastContext from './ToastContext';

let toastCount = 0;

const ToastProvider: React.FC = ({ children }) => {
  const [toasts, setToasts] = React.useState<ToastSettings[]>([]);

  const createToastInstance = (settings: ToastSettings): ToastSettings => {
    const { id, ...rest } = settings;

    // eslint-disable-next-line no-plusplus
    const uniqueId = ++toastCount;
    const generatedId = `${id || 'toast'}-${uniqueId}`;

    return {
      id: generatedId,
      ...rest,
    };
  };

  const addToast = React.useCallback(
    (settings: ToastSettings) => {
      const toast = createToastInstance(settings);
      setToasts(toastItems => [toast, ...toastItems]);
      return toast;
    },
    [setToasts]
  );

  const removeToast = React.useCallback(
    (id?: string) => {
      setToasts(toastItems => toastItems.filter(t => t.id !== id));
    },
    [setToasts]
  );

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} />
    </ToastContext.Provider>
  );
};

export default ToastProvider;
