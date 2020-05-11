export type NotificationStatus = 'default' | 'success' | 'warning' | 'error';

export interface ToasterSettings {
  id?: string;
  title?: string;
  message?: string;
  status?: NotificationStatus;
  image?: any;
  position?: string;
  dismissible?: boolean;
  dismissAfter?: number;
  onRemove?: () => void;
  allowHTML?: boolean;
}

export type ToasterHandler = (settings: ToasterSettings) => ToasterSettings;
