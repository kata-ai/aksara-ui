import { Story } from '@storybook/react';
import * as React from 'react';

import Badge, { BadgeProps } from './Badge';

export default {
  title: 'Core/Components/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['default', 'neutral', 'info', 'warning', 'critical', 'success'],
      },
    },
    size: {
      control: {
        type: 'radio',
        options: ['sm', 'md', 'lg'],
      },
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
