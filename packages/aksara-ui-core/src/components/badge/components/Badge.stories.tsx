import { Story } from '@storybook/react';
import * as React from 'react';

import badgeVariants from '../variants';
import Badge, { BadgeProps } from './Badge';

export default {
  title: 'Core/Components/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: Object.keys(badgeVariants),
      },
    },
    children: {
      control: 'text',
    },
  },
};

const Template: Story<BadgeProps> = args => <Badge {...args} />;

export const BasicExample = Template.bind({});
BasicExample.args = {
  variant: 'base',
  children: 'example',
};
