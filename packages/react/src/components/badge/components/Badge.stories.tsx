import { IconClose } from '@aksara-ui/icons';
import { Story } from '@storybook/react';
import * as React from 'react';

import Badge, { BadgeProps } from './Badge';

export default {
  title: 'Core/Components/Badge',
  component: Badge,
  argTypes: {
    variant: {
      options: ['default', 'info', 'warning', 'critical', 'success', 'active'],
    },
    size: {
      options: ['sm', 'md', 'lg'],
    },
    children: {
      control: 'text',
    },
  },
};

const Template: Story<React.PropsWithChildren<BadgeProps>> = args => <Badge {...args} />;

export const BasicExample = Template.bind({});
BasicExample.args = {
  variant: 'default',
  size: 'md',
  children: 'example',
};

export const WithIcon: Story<React.PropsWithChildren<BadgeProps>> = args => {
  return <Badge icon={IconClose} {...args} />;
};
WithIcon.args = {
  variant: 'critical',
  size: 'md',
  children: 'example',
};
