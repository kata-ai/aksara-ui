import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react';
import * as React from 'react';
import { IconPen } from '@aksara-ui/icons';

import IconButton, { IconButtonProps } from './IconButton';

export default {
  title: 'Core/Components/Button/IconButton',
  component: IconButton,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['default', 'outline', 'destructive', 'ghost'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: [24, 32, 40],
      },
    },
  },
};

export const Example: Story<IconButtonProps> = args => (
  <IconButton type="button" aria-label="Push Me" onClick={action('button-click')} {...args}>
    <IconPen fill="currentColor" aria-hidden />
  </IconButton>
);
Example.args = {
  variant: 'outline',
  size: 32,
};
