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
      options: ['default', 'primary', 'outline', 'destructive', 'ghost'],
    },
    size: {
      options: [32, 40, 48],
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

const Template: Story<ButtonProps> = ({ variant, size, block, disabled, isLoading, icon, iconPosition }) => (
  <Button
    type="button"
    onClick={action('button-click')}
    variant={variant}
    size={size}
    block={block}
    disabled={disabled}
    isLoading={isLoading}
    icon={icon}
    iconPosition={iconPosition}
  >
    Push Me
  </Button>
);

export const Example = Template.bind({});
Example.args = {
  variant: 'primary',
  size: 40,
  block: false,
  disabled: false,
  isLoading: false,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...Example.args,
  icon: IconPen,
  iconPosition: 'left',
};
