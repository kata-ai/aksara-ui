export enum NotificationStatus {
  DEFAULT = 'default',
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error'
}

export interface ToasterSettings {
  id?: string;
  title?: string;
  message?: string;
  status?: string | number | NotificationStatus;
  image?: any;
  position?: string;
  dismissible?: boolean;
  dismissAfter?: number;
  onRemove?: () => void;
  allowHTML?: boolean;
}

export type ToasterHandler = (settings: ToasterSettings) => ToasterSettings;
