import * as React from 'react';

import { ComponentBlock, SystemWrapper, SystemBlock } from '../../utils/storybook';
import { Button } from '../button';
import { notification } from './index';

const readme = require('./README.md');

export default {
  title: 'Core|Components/Notifications',
  component: notification,
  decorators: [SystemWrapper],
  parameters: {
    notes: { markdown: readme },
  },
};

export const BasicExample = () => (
  <SystemBlock title="Notifications" subtitle="Pluggable notifications element that doesn't rely on Redux.">
    <ComponentBlock title="Toaster">
      <Button
        variant="outline"
        onClick={() => {
          notification.toaster({
            title: 'Toaster',
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
            title: 'Toaster',
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
            title: 'Toaster',
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
            title: 'Toaster',
            message: 'Hello world! This is a toaster',
            status: 'error',
            dismissible: true,
            dismissAfter: 5000,
          });
        }}
      >
        Error
      </Button>
    </ComponentBlock>
  </SystemBlock>
);
