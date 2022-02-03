import * as React from 'react';
import { Box } from '../../../../layout/box';
import { useComponentStyles } from '../../../../system';

export interface NotificationBadgeProps {
  /** Additional CSS classes to give to the component. */
  className?: string;
  /** Additional CSS properties to give to the component. */
  style?: React.CSSProperties;
  /** Value for notification badge */
  value?: React.ReactNode;
}

const NotificationBadge: React.FC<NotificationBadgeProps> = ({ value, ...rest }) => {
  const notificationBadgeStyle = useComponentStyles('notificationBadge');
  return (
    <Box data-testid="notification-badge" sx={notificationBadgeStyle} {...rest}>
      {value}
    </Box>
  );
};
export default NotificationBadge;
