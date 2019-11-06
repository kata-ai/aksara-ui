import { storiesOf } from '@storybook/react';
import * as React from 'react';

import {
  StoryContainer,
  StoryHeader,
  StorybookWrapper,
  ComponentBlock
} from '../../utils/storybook';
import { Button } from '../button';
import { notification } from './index';

const readme = require('./README.md');

storiesOf('Core|Components/Notifications', module)
  .addDecorator(StorybookWrapper)
  .add(
    'basic',
    () => (
      <StoryContainer>
        <StoryHeader
          title="Notifications"
          subtitle="Pluggable notifications element that doesn't rely on Redux."
        />
        <ComponentBlock title="Toaster">
          <Button
            variant="support"
            onClick={() =>
              notification.toaster({
                title: 'Toaster',
                message: 'Hello world! This is a toaster',
                dismissible: true,
                dismissAfter: 5000
              })
            }
            style={{ marginRight: 8 }}
          >
            Default
          </Button>
          <Button
            variant="support"
            onClick={() =>
              notification.toaster({
                title: 'Toaster',
                message: 'Hello world! This is a toaster',
                status: 'success',
                dismissible: true,
                dismissAfter: 5000
              })
            }
            style={{ marginRight: 8 }}
          >
            Success
          </Button>
          <Button
            variant="support"
            onClick={() =>
              notification.toaster({
                title: 'Toaster',
                message: 'Hello world! This is a toaster',
                status: 'info',
                dismissible: true,
                dismissAfter: 5000
              })
            }
            style={{ marginRight: 8 }}
          >
            Info
          </Button>
          <Button
            variant="support"
            onClick={() =>
              notification.toaster({
                title: 'Toaster',
                message: 'Hello world! This is a toaster',
                status: 'warning',
                dismissible: true,
                dismissAfter: 5000
              })
            }
            style={{ marginRight: 8 }}
          >
            Warning
          </Button>
          <Button
            variant="support"
            onClick={() =>
              notification.toaster({
                title: 'Toaster',
                message: 'Hello world! This is a toaster',
                status: 'error',
                dismissible: true,
                dismissAfter: 5000
              })
            }
          >
            Error
          </Button>
        </ComponentBlock>
      </StoryContainer>
    ),
    {
      notes: { markdown: readme }
    }
  );
