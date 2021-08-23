import { Story } from '@storybook/react';
import { IconPen } from '@aksara-ui/icons';
import * as React from 'react';

import PlainButton, { PlainButtonProps } from './PlainButton';

export default {
  title: 'Core/Components/Button/PlainButton',
  component: PlainButton,
  argTypes: {
    variant: {
      options: ['primary', 'destructive'],
    },
    size: {
      options: ['sm', 'md'],
    },
    isLoading: {
      control: 'boolean',
    },
    onClick: {
      action: 'clicked',
    },
  },
};

const Template: Story<PlainButtonProps> = ({ variant, size, isLoading, icon, iconPosition, onClick }) => (
  <PlainButton
    type="button"
    variant={variant}
    size={size}
    isLoading={isLoading}
    icon={icon}
    iconPosition={iconPosition}
    onClick={onClick}
  >
    Push Me
  </PlainButton>
);

export const Example: Story<PlainButtonProps> = Template.bind({});
Example.args = {
  variant: 'primary',
  size: 'sm',
  isLoading: false,
};

export const WithIcon: Story<PlainButtonProps> = Template.bind({});
WithIcon.args = {
  ...Example.args,
  icon: IconPen,
  iconPosition: 'left',
};
