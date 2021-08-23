import * as React from 'react';
import { Story } from '@storybook/react';
import { IconPen } from '@aksara-ui/icons';

import Button, { ButtonProps } from './Button';

export default {
  title: 'Core/Components/Button/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'destructive', 'ghost'],
    },
    size: {
      options: ['sm', 'md', 'lg'],
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
    onClick: {
      action: 'clicked',
    },
  },
};

const Template: Story<ButtonProps> = ({ variant, size, block, disabled, isLoading, icon, iconPosition, onClick }) => (
  <Button
    type="button"
    variant={variant}
    size={size}
    block={block}
    disabled={disabled}
    isLoading={isLoading}
    icon={icon}
    iconPosition={iconPosition}
    onClick={onClick}
  >
    Push Me
  </Button>
);

export const Example: Story<ButtonProps> = Template.bind({});
Example.args = {
  variant: 'primary',
  size: 'md',
  block: false,
  disabled: false,
  isLoading: false,
};

export const WithIcon: Story<ButtonProps> = Template.bind({});
WithIcon.args = {
  ...Example.args,
  icon: IconPen,
  iconPosition: 'left',
};
