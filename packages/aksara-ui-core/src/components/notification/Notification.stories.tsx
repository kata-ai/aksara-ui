import * as React from 'react';

import { SystemWrapper } from '../../utils/storybook';
import { Button } from '../button';
import { notification } from './index';

export default {
  title: 'Core|Components/Notifications',
  component: notification,
  decorators: [SystemWrapper],
};

export const Toaster = () => (
  <>
    <Button
      variant="outline"
      onClick={() => {
        notification.toaster({
          message: 'Hello world! This is a toaster',
          dismissible: true,
          dismissAfter: 5000,
        });
      }}
      style={{ marginRight: 8 }}
    >
      Default
    </Button>
    <Button
      variant="outline"
      onClick={() => {
        notification.toaster({
          message: 'Hello world! This is a toaster',
          status: 'success',
          dismissible: true,
          dismissAfter: 5000,
        });
      }}
      style={{ marginRight: 8 }}
    >
      Success
    </Button>
    <Button
      variant="outline"
      onClick={() => {
        notification.toaster({
          message: 'Hello world! This is a toaster',
          status: 'warning',
          dismissible: true,
          dismissAfter: 5000,
        });
      }}
      style={{ marginRight: 8 }}
    >
      Warning
    </Button>
    <Button
      variant="outline"
      onClick={() => {
        notification.toaster({
          message: 'Hello world! This is a toaster',
          status: 'error',
          dismissible: true,
          dismissAfter: 5000,
        });
      }}
    >
      Error
    </Button>
  </>
);
