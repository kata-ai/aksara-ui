import * as React from 'react';

const ToastContext = React.createContext({});

export const ToastProvider: React.FC = ({ children }) => {
  return <ToastContext.Provider value={{}}>{children}</ToastContext.Provider>;
};

export const useToast = () => React.useContext(ToastContext);
