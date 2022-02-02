import { Story } from '@storybook/react';
import * as React from 'react';

import NotificationBadge, { NotificationBadgeProps } from './NotificationBadge';

export default {
  title: 'Core/Components/Badge/NotificationBadge',
  component: NotificationBadge,
  argTypes: {
    value: {
      control: 'text',
    },
  },
};

const Template: Story<React.PropsWithChildren<NotificationBadgeProps>> = args => <NotificationBadge {...args} />;

export const BasicExample = Template.bind({});
BasicExample.args = {
  value: '99',
};
