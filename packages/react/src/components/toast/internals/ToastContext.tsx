import * as React from 'react';
import { ToastContextType } from '../types';

const ToastContext = React.createContext<ToastContextType>({} as ToastContextType);

export default ToastContext;
