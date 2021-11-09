export type ToastVariants = 'default' | 'error';

export interface ToastSettings {
  id?: string;
  message: string;
  status?: ToastVariants;
  icon?: React.ComponentType<any>;
  dismissible?: boolean;
  dismissAfter?: number;
  actionText?: string;
  onAction?: () => void;
  onRemove?: () => void;
  allowHTML?: boolean;
}

export interface ToastContextType {
  toasts?: ToastSettings[];
  addToast: (settings: ToastSettings) => ToastSettings;
  removeToast: (id?: string) => void;
}
