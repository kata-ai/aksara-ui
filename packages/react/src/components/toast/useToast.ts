import * as React from 'react';
import { ToastContext } from './internals';

const useToast = () => React.useContext(ToastContext);

export default useToast;
