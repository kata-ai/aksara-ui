import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react';
import { IconPen } from '@aksara-ui/icons';

import Button, { ButtonProps } from './Button';

export default {
  title: 'Core/Components/Button/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['default', 'primary', 'outline', 'destructive', 'ghost'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: [32, 40, 48],
      },
    },
    block: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    isLoading: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
};

const Template: Story<ButtonProps> = args => <Button type="button" onClick={action('button-click')} {...args} />;

export const Example = Template.bind({});
Example.args = {
  variant: 'primary',
  size: 40,
  block: false,
  disabled: false,
  isLoading: false,
  children: 'Push Me',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...Example.args,
  icon: IconPen,
  iconPosition: 'left',
};
